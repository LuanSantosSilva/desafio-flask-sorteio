from random import randint

continuar = True
pontos = 0

while continuar:
    quantidade = input("Quantas vezes você deseja jogar?")
    if quantidade.isnumeric() and int(quantidade) > 0:
        continuar = False

for i in range(0,int(quantidade)):
    numero_usuario = 0
    continuar = True
    while continuar:
        numero_usuario = input("Escolha um número de 1 à 10:")
        if numero_usuario.isnumeric() and int(numero_usuario) >= 1 and int(numero_usuario) <= 10:
            continuar = False
            numero_sorteado = randint(1,10)

            if numero_sorteado == int(numero_usuario):
                print("Parabéns você acertou")
                pontos+=3
            else:
                print(f"Infelizmente o número sorteado foi {numero_sorteado}")

                pontos-=1
                pontos = 0 if pontos <= 0 else pontos

    
print(f"\033[36m===============\nVocê conseguiu um total de {pontos} pontos\n===============\033[0;0m")