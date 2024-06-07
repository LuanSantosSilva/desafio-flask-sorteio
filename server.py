from flask import Flask, render_template, request, make_response
from random import randint

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sorteio', methods = ['POST'])
def post_formulario():
    quantidade = request.form['quantidade']

    return render_template('sorteio.html', quantidade=quantidade)

@app.route('/sortear')
def sortear():
    numero_sorteado = str(randint(1,10))
    return make_response(numero_sorteado, 200)

if(__name__ == '__main__'):
    app.run(debug=True)