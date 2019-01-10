from collections import defaultdict
from random import choice as rc
import json

def make_model(tokens, order):
	model = defaultdict(list)
	for i in range(len(tokens)-order):
		history = tokens[i:i+order]
		next_token = tokens[i+order]
		model[ tuple(history) ].append(next_token)
	return model

def save_model(filename, model):
	new_model = { ','.join(k) : model[k] for k in model.keys() }
	with open(filename, 'w') as outjson:
		json.dump(new_model, outjson)

def load_model(filename):
	with open(filename, 'r') as injson:
		model = json.load(injson)
	new_model = { tuple(k.split(',')) : model[k] for k in model.keys() }
	return new_model

def generate(model, length, seed=False):
	if not seed:
		seed = rc(model.keys())
	elif not seed in model:
		raise Exception("Seed not in model!")

	result = list(seed)

	for _ in range(length):
		next_token = rc( model[seed] )
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

	with open(book_filename, 'r') as infile:
		book_text = infile.read()

	book_tokens = tokenize_nosplit(book_text)

	book_model = make_model(book_tokens, int(order_str))

	save_model(book_filename.replace('.txt', '.json'), book_model)

	print generate(book_model, 100)