<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./css/table.css">
    <title>Personalo valdymas</title>

    <!-- <link rel="stylesheet" href="css/style.css" /> -->
  </head>

  <body>
    <h1>Personalo valdymo programa</h1>

      <div class="container" id='memb'>
        <read-member></read-member>
      </div>
      <div class="container" id='proj'>  
        <read-project></read-project>
      </div>
      
     
     
    <script src="https://unpkg.com/vue@2.6.11/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="/js/members.js"></script>   
    <script src="/js/projects.js"></script>  
  </body>
</html>