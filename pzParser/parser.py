import re
import json

"""
    Parses PZ text files that contain object data and converts it to JSON.
"""
def file_parse(path):
    def remove_comments(x):
        pattern = r"/\*.*?\*/"

        return re.sub(re.compile(pattern, re.DOTALL), "", x)

    def get_objects(x):
        pattern = '(?<=item\s)(\w+)(?:.*?)(\{.*?\})'
        data = {}
        names = []
        
        for x in re.findall(pattern, x, re.S):
            name, items = x[0], get_items(x[1])
            data[name.lower()] = items
            names.append(name)

        return [data, names]

    def get_items(x):
        pattern = r'(\w+)\s*=\s*(\S+),'

        return re.findall(pattern, x.strip(), re.MULTILINE)


    with open(f'{path}.txt', 'r') as f:
        content = f.read()

        stripped_data = remove_comments(content)
        data, names = get_objects(stripped_data)

        if data == {}:
            raise Exception('File does not contain valid data')
        
        with open(f'parsed-{path}.json', 'w') as f:
            _dict = {
                "objects": data,
                "names": names
            }

            json.dump(_dict, f)
file_parse('stuff')