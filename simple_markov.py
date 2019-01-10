
from collections import defaultdict
from random import choice
import json

def make_model(tokens, order):
        model = defaultdict(list)
        for i in range(len(tokens)-order):
                history = tokens[i:i+order]
                next_token = tokens[i+order]
                model[ tuple(history) ].append(next_token)
        return model

def generate(model, length, seed=False):
        if not seed:
                seed = choice(list(model.keys()))
        elif not seed in model:
                raise Exception("Seed not in model!")

        result = list(seed)

        for i in range(length):
                next_token = choice( model[seed] )
                result.append(next_token)
                prior_tokens = list(seed)[1:]
                prior_tokens.append(next_token)
                seed = tuple(prior_tokens)

        return ' '.join(result)

if __name__ == '__main__':
        from sys import argv
        from tokenize import tokenize_nosplit

        if len(argv) != 3:
                raise Exception('Script requires a file to and an order.')

        script_filename, book_filename, order_str = argv

        with open(book_filename, 'r', encoding='utf-8') as infile:
                book_text = infile.read()

        book_tokens = tokenize_nosplit(book_text)

        book_model = make_model(book_tokens, int(order_str))
        #the number 100 below determines the length of the result
        print(generate(book_model, 400))