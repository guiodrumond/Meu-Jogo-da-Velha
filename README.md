### Meu Jogo da Velha

07/07/2022 - Após as últimas implementações o jogo da velha ficou funcional, mas com um erro: ele inverte o ganhador!
![image](https://user-images.githubusercontent.com/87048670/177809096-6ae10432-de32-49c2-bc0c-095e825c116d.png)
Vamos conferir o código!
![image](https://user-images.githubusercontent.com/87048670/177809715-562fb3fe-886d-47d3-ac2c-68a420cd4556.png)
Simples, a checagem que é feita se há um winner para mostrar o menu está dando os símbolos de forma invertida à função getLabel():
![image](https://user-images.githubusercontent.com/87048670/177810577-80266d78-c44c-4366-8d45-b26fca184f1d.png)
Basta corrigir... 😉