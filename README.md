# hackathon-tractian
Neste projeto, desenvolvido durante o Hackathon da Tractian em Outubro de 2024 durante a Semana da Computação (SECOMP) da UFSCar, buscamos desenvolver um sistema a fim de ajudar técnicos de manutenção facilitando e otimizando a organização de tarefas e de equipamentos necessários para executá-las. As tarefas serão geradas a partir de arquivos de áudio e elas serão organizadas em uma interface web utilizando IA. Durante o período de 8 horas do hackathon, conseguimos desenvolver o front-end da aplicação e fazer a análise do áudio enviado a partir da comunicação com a API do ChatGPT, porém a parte da escolha dos equipamentos com base nas tarefas com o auxílio de IA fica para uma próxima implementação.

## Equipe
Carolina Santos - Desenvolvedora Front-end

Ivan Fernando Rizzi - Desenvolvedor Back-end

Matheo Duarte - Desenvolvedor de Prompt

Nicole Ramos - UX/UI Designer

## Ferramentas e Tecnologias Utilizadas
### Frontend
JavaScript
CSS
HTML

### Backend
Node.JS

### Outras Tecnologias
Figma
OpenAI API

## Como funciona a solução?
Na interface web o usuário pode realizar o upload de um arquivo de áudio para que as suas tarefas diárias sejam transcritas em texto e organizadas em uma lista (to-do list), além de informar quais equipamentos são necessários para executar cada uma delas. Todo esse processo de transcrição ocorre mediante a API da OpenAI: utilizando o modelo Whisper, realizamos a transcrição do áudio fornecido pelo usuário e criamos uma to-do list com as tarefas que ele precisa realizar ao longo do dia com base no conteúdo transcrito. Em seguida, novamente com o auxílio da API, utilizamos um propomt para determinar quais são as ferramentas necessárias para cada tarefa e escrevendo cada um dos equipamentos em outra to-do list.

Futuramente, pensando em aprimorar e complementar o nosso sistema, gostariamos de adicionar recomendações de manuais com base em cada tarefa, tradução de inglês para português com ajuda de IA, tutoriais em vídeos, entre outros facilitadores para o usuário com base em suas tarefas do dia.
