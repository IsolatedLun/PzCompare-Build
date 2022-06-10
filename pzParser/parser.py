import re
import json
from os import walk
from utils import tuples_to_dict

"""
    Parses PZ text files that contain object data and converts it to JSON.
"""
def file_parse(f_name: str, output: str, write_to_file: bool):
    def remove_comments(x: str):
        pattern = r"/\*.*?\*/"

        return re.sub(re.compile(pattern, re.DOTALL), "", x)

    # Gets all objects in the text file.
    def get_objects(x: str):
        pattern = '(?<=item\s)(\w+)(?:.*?)(\{.*?\})'
        data = {}
        names = []
        
        for x in re.findall(pattern, x, re.S):
            name, items = x[0], get_items(x[1])
            data[name.lower()] = tuples_to_dict(items)
            names.append(name)

        return [data, names]

    def get_items(x: str):
        pattern = r'(\w+)\s*=\s*(\S+),'

        return re.findall(pattern, x.strip(), re.MULTILINE)


    with open(f_name, 'r') as f:
        content = f.read()

        # 1) Strip comments (Not necessarily needed, but it's better)
        stripped_data = remove_comments(content)
        # 2) Get objects
        data, names = get_objects(stripped_data)

        if data == {}:
            raise Exception(f'File {f_name} does not contain valid data')
        
        if write_to_file:
            with open(output, 'a') as f:
                _dict = {
                    "objects": data,
                    "names": names
                }

                json.dump(_dict, f)

    return [data, names]

# Loops through many files in the assigned dir and executes file_parse().
"""
    Collects all parsed data into 1 object with other miscellaneous info and dumps it into a big JSON file.
"""
def bulk_parse(dir: str, output: str):
    objects = {}
    categories = {}

    names = []

    with open(output, 'w') as main_file:
        for _, dirname, f_names in walk(dir):
            for f_name in f_names:
                print(f'Parsing {f_name}...')

                _data, _names = file_parse(f'{dir}/{f_name}', output, False)

                objects.update(_data)
                names += _names

                # Required filename eg. {category}.{type}.{index}.txt
                category, sub_category, *_ = f_name.split('.')

                categories.setdefault(category, {})[sub_category] = _names

                print(f'Finished parsing {f_name}...\n')

        # Finalizing everything to create the MasterData.
        _dict = {
            "objects": objects,
            "names": names,
            "categories": categories,
            "misc": {
                "objectAmt": len(names),
                "categoryAmt": len(categories),
            }
        }

        json.dump(_dict, main_file)


bulk_parse('./files', './Master.json')