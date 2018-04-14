$(document).ready(() => {

    const techImgSrcs = {
      html: "assets/images/html.png",
      css: "assets/images/css.png",
      js: "assets/images/js.png",
      jQuery: "assets/images/jQuery.jpg",
      bootstrap: "assets/images/bootstrap.png",
      moment: "assets/images/moment.png",
      firebase: "assets/images/firebase.png",
      mongo: "assets/images/nodeJS.png",
      nodeJS: "assets/images/mongo.png",
      react: "assets/images/react.png",
      passport: "assets/images/passport.png",
      ajax: "assets/images/ajax.png"
    };

    const {html, css, js, jQuery, bootstrap, moment, firebase, nodeJS, mongo, react, passport, ajax} = techImgSrcs;

    const projectsArr = [
      {
        id: "simpsonsModal",
        title: "The Simpsons Trivia Game",
        imgSrc: "assets/images/simpsons_trivia.jpg",
        techs: [html, css, js, jQuery],
        role: "Sole Developer & Designer",
        bullets: ["Trivia game using JavaScript for logic, jQuery to manipulate HTML, and CSS for styling.", "Questions and timers are dynamically adding using logic in jQuery and Javascript."],
        url: "https://vitbenton88.github.io/TriviaGame/",
        urlText: "View on GitHub Pages"
      },
      {
        id: "trainModal",
        title: "Train Scheduler",
        imgSrc: "assets/images/trainScheduler.jpg",
        techs: [bootstrap, moment, js, firebase],
        role: "Sole Developer & Designer",
        bullets: ["Train schedule application that incorporates Firebase to host arrival and departure data. Retrieves and manipulates time data with Moment.js. This app provides up-to-date information about various trains, their arrival times and how many minutes remain until arrival.", "Trains are dynamically added and removed both in the browser and in Firebase by user input. Styling done using the Bootstrap library."],
        url: "https://vitbenton88.github.io/TrainScheduler/",
        urlText: "View on GitHub Pages"
      },
      {
        id: "guitarKeyModal",
        title: "The Guitar Key",
        imgSrc: "assets/images/guitarKey.jpg",
        techs: [nodeJS, mongo, react, passport],
        role: "Sole Developer & Designer",
        bullets: ["User friendly song writing assistant that uses basic musical keys to help users develop their musical acumen. The Guitar Key was developed to be used with a six string guitar. The Guitar Key will also leverage APIs to provide songs to learn alongside the respective key and to provide chord shapes for each chord in the key.", "This is a React JS app that incorporates a MongoDB database with Mongoose and Passport.js with Bcrypt for user authentication."],
        url: "https://nameless-castle-57970.herokuapp.com/",
        urlText: "View on Heroku"
      },
      {
        id: "GifTasticModal",
        title: "GifTastic",
        imgSrc: "https://media.giphy.com/media/v22gEBPOMWPsY/giphy.gif",
        techs: [bootstrap, html, js, ajax],
        role: "Sole Developer & Designer",
        bullets: ["Using the GIPHY API, this dynamic web page populates with gifs of your choice.", "With each button click, an AJAX cqall is made to retrieve gif locations and their corresponding ratings. Clicking ech thumbnail can toggle between a static and animated gif.", "The app was developed using HTML5, CSS3, Javascript, jQuery, AJAX, and the Bootstrap framework."],
        url: "https://vitbenton88.github.io/GifTastic/",
        urlText: "View on GitHub Pages"
      }
    ];

    let projects = projectsArr.map(project => `
      <div data-target="#${project.id}" class="col-sm-4 col-xs-12 col-sm-offset-1 portfolioIcons">
          <h5>${project.title}</h5>
          <img src="${project.imgSrc}" alt="${project.title} Image">
          <div class="overlay">
            ${project.techs.map(tech => `<img class="tech" src="${tech}" alt="Tech Icon">`).join('')}
          </div>
      </div>
      <div id="${project.id}" class="modal fade" role="dialog">
          <div class="modal-dialog modal-md">
              <!-- Modal Content-->
              <div class="modal-content">
                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">${project.title}</h4>
                  </div>
                  <div class="modal-body">
                      <h4 class="projectTitle">${project.role}</h4>
                      <hr>
                      <ul class="modalList">
                      ${project.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                      </ul>
                      <button onclick="window.open('${project.url}')" type="button" class="btn expandBtn">${project.urlText}</button>
                  </div>
              </div>
          </div>
      </div>
      `);

    const projectsWrap = $('#projectsWrap');
    projectsWrap.append(projects);

});
