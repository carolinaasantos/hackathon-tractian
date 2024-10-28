# hackathon-tractian
Neste projeto, buscamos ajudar técnicos de manutenção facilitando e otimizando a organização de tarefas e das ferramentas necessárias para executá-las. As tarefas serão geradas a partir de arquivos de áudio (a princípio) e elas serão organizadas em uma interface web utilizando IA.  

## Ferramentas e Tecnologias
### Backend
Javascript
Node.JS

### Frontend
CSS
HTML
JavaScript

### Outras Tecnologias
Figma
OpenAI API

## Como funciona a solução?
Na interface web o usuário pode realizar o upload de um arquivo de áudio para que as suas tarefas diárias sejam elaboradas e organizadas em uma lista, além de informar quais equipamentos são necessários para cada uma delas. Isso ocorre mediante a API da OpenAI: utilizando o modelo Whisper, realizamos a transcrição do áudio fornecido pelo uauário e criamos uma to-do list com base no conteúdo transcrito. Em seguida, determina quais são as ferramentas necessárias para cada tarefa utilizando o chatGPT e escrevendo cada uma das ferramentas em uma outra check-list.

Futuramente, gostariamos de adicionar recomendações de manuais, vídeos, tutoriais... para o usuário com base em suas tarefas do dia, indicando também resumos na linguagem nativa do usuário mediante traduções feitas com IA.


