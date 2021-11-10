/*************************** 1. MODELL - ARRAY *****************************/

const imageGallery = [
   {
      title: 'aligator',
      figure: {
         url: 'assets/images/gallery/aligator.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'animal floor',
      figure: {
         url: 'assets/images/gallery/animal-floors.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'dragon',
      figure: {
         url: 'assets/images/gallery/beardedDragon.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'bears',
      figure: {
         url: 'assets/images/gallery/bears.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'bunny',
      figure: {
         url: 'assets/images/gallery/bunny.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'animal wall',
      figure: {
         url: 'assets/images/gallery/animalWall.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'elephants',
      figure: {
         url: 'assets/images/gallery/elephants.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'hedgehog',
      figure: {
         url: 'assets/images/gallery/hedgehog.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   }
]




/*************************** 2. MODEL -> VIEW *****************************/

function insertGallery() {
   imageGallery.forEach(art => {
      const galleryContainer = document.querySelector('#gallery__container');
      const galleryScrollLength = document.querySelector('#gallery__scroll-length');

      /* create */
      const work = document.createElement('div');
      const figure = document.createElement('figure');
      const info = document.createElement('div');
      const scrollLength = document.createElement('div');

      /* img */
      function insertFigureElements() {

         /* create */
         const img = document.createElement('img');
         const figCaption = document.createElement('figcaption');

         /* value */
         img.src = art.figure.url;
         img.alt = art.figure.alt;
         figCaption.innerText = art.figure.figCaption;

         /* append */
         figure.appendChild(img);
         figure.appendChild(figCaption);
      }

      insertFigureElements()

      /* info */
      function insertInfoElements() {

         /* create */
         const title = document.createElement('div');
         const details = document.createElement('div');

         function insertDetailsElements() {
            /* create */
            const date = document.createElement('div');
            const description = document.createElement('div');

            /* name */
            date.className = 'date';
            description.className = 'description';

            /* value */
            date.innerText = art.date;
            description.innerText = art.description;

            /* append */
            details.appendChild(date);
            details.appendChild(description);
         }

         insertDetailsElements()

         /* name */
         title.className = 'title';
         details.className = 'details';

         /* value */
         title.innerText = art.title;

         /* append */
         info.appendChild(title)
         info.appendChild(details)
      }

      insertInfoElements()

      /* name */
      work.className = 'work';
      work.id = 'work';
      figure.className = 'figure';
      info.className = 'info';
      scrollLength.className = 'scroll-length';

      /* append */
      work.appendChild(figure);
      work.appendChild(info);
      galleryContainer.appendChild(work);
      galleryScrollLength.appendChild(scrollLength);
   })

   /******** LAST COMP MARGIN ********/
   const galleryContainer = document.querySelector('#gallery__container');

   /* create */
   const lastGalleryMargin = document.createElement('div');

   /* name */
   lastGalleryMargin.className = 'last-margin';

   /* append */
   galleryContainer.appendChild(lastGalleryMargin);

};

insertGallery()




/*************************** 3. GALLERY SCROLL CONTROLLER *****************************/

/****** gallery scroll-animation ******/

function galleryScroll() {
   const galleryContainer = document.querySelector('#gallery__container');
   let scrollValue = lastKnownPosistion;
   galleryContainer.scrollLeft = 0 + scrollValue;
   console.log(galleryContainer.scrollLeft);
};




/*************************** 4. GLOBAL EVENT-LISTENERS *****************************/

let lastKnownPosistion = 0;
let ticking = false;

document.addEventListener('scroll', function (event) {
   lastKnownPosistion = window.scrollY;
   if (!ticking) {
      window.requestAnimationFrame(function () {
         galleryScroll(lastKnownPosistion)
         ticking = false;
      });
      ticking = true;
   }
});


