def tuples_to_dict(arr: list[tuple]):
    return { key : val for key, val in arr }

def combine_text_files_in_dir(out: str):
    from os import walk

    data = ''

    for dirpath, _, f_names in walk('./toCombine'):
        for f_name in f_names:
            with open(dirpath + '/' + f_name, 'r') as f:
                print('Combining ' + f_name)

                data += f.read()
    
    with open(out, 'w') as f:
        f.write(data);


combine_text_files_in_dir('./out.txt')