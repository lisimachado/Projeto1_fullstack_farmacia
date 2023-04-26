## Olá! Bem-vindo(a) ao projeto Pharmacy Central System!

#### Qual o problema ele resolve?
O **Pharmacy Central System** nasceu da necessidade de uma grande rede de farmácias, chamada **LABPharmacy Inc**, em gerenciar todas as suas unidades e também os medicamentos de sua venda.

#### Técnicas e tecnologias utilizadas:

Este projeto demonstra as habilidades e conhecimentos em desenvolvimento web utilizando-se do aprendizado adquirido no **Curso Fullstack do Senai - Lab365**. O projeto é uma aplicação web que possui diversas funcionalidades, incluindo a exibição, interação com o usuário e integração com API externa para algumas funcionalidades do sistema, como: renderização do mapa e busca de endereço pelo CEP.


A estrutura do projeto é organizada em componentes e pages, seguindo as práticas aprendidas no decorrer do curso e recomendadas pela comunidade React. 
-  Os arquivos componentes possuem a maior parte das informações responsáveis pelo funcionamento do sistema e;
- Os arquivos "pages" por apresentar as informações na tela, além de conterem suas próprias funcionalidades.

Este projeto foi desenvolvido utilizando:
- Biblioteca React;
- React Vite - para inicialização e estrutura do projeto;
- React boostrap e bootstrap - para a estilização;
- Git flow - para o versionamento;
- React input mask e Imask - para as máscaras dos inputs de formulário;
- API Leaflet - para utilização do mapa;
- API Axios - para busca do endereço pelo CEP;
- React router dom - para configuração das rotas;


#### Como executar o modo develop:
Para executar este projeto em sua máquina local, é necessário ter o [Node.js](https://nodejs.org/en/download) instalado, na sua versão mais atual. Após clonar o repositório, execute o comando a seguir para instalar as dependências necessárias, as quais se encontram liostadas no arquivo 'package.json'.

```console
npm install
``` 

 Na sequência, execute o comando a seguir para iniciar a aplicação localmente:
 
 ```console
 npm run dev
 ```


#### Melhorias que podem ser aplicadas:
 - Adicionar um campo de busca/filtro na página de farmácias e medicamentos;
 - Adicionar uma API que busque a geolocalização (coordenadas geográficas) pelo CEP;
 - Melhorar a responsividade para utilização em dispositivo móvel;
 - Adicionar imagem local da loja da farmácia;


#### Deploy
 O projeto está hospedado na Cloudflare no serviço de pages. 
 Para fazer o deploy da aplicação execute o comando abaixo para gerar os arquivos necessários:

 ```console
 node run buil
 ```
 Este comando irá gerar os arquivos js, html e css na /dist utilizada para o deploy na Cloudflare.

 **Para acessar o deploy clique no link a seguir:**
 https://farmacia.lisi.eti.br


 #### Vídeo

O vídeo explicativo do projeto você pode assistir clicando no link abaixo:
https://drive.google.com/file/d/10glRt4snydE91dSSYuyGEORUJE2q4cBk/view?usp=sharing


#####Obrigada por acessar o Pharmacy Central System!