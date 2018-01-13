<template>
    <div id="viewerContainer">
      <div id="viewer" class="pdfViewer"></div>
    </div>
</template>

<script>

import pdfjs,{PDFJS} from 'pdfjs-dist/webpack'
import 'pdfjs-dist/web/pdf_viewer.js'


export default {
    props:{
        src:String,
    },
    data() {
        return {
            page:1,
            scale:2,
            pdfViewer:null,
            pdfLinkService:null,
        }
    },
    watch: {
      src(v){
         this.showPdf(v);
         console.info(this.src)
      }
    },
    mounted(){
        this.webViewerLoad();
        if(this.src){
             this.showPdf(this.src);
        }
    },
    methods: {
        webViewerLoad() {
            var SEARCH_FOR = ''; // try 'Mozilla';

            var container = document.getElementById('viewerContainer');

            var pdfViewer,pdfLinkService,pdfFindController;
            // (Optionally) enable hyperlinks within PDF files.
            this.pdfLinkService = pdfLinkService = new PDFJS.PDFLinkService();

            this.pdfViewer = pdfViewer = new PDFJS.PDFViewer({
              container: container,
              linkService: pdfLinkService,
            });
            pdfLinkService.setViewer(pdfViewer);

            // (Optionally) enable find controller.
            pdfFindController = new PDFJS.PDFFindController({
              pdfViewer: pdfViewer
            });
            pdfViewer.setFindController(pdfFindController);

            container.addEventListener('pagesinit', function () {
              // We can use pdfViewer now, e.g. let's change default scale.
              pdfViewer.currentScaleValue = 'page-width';

              if (SEARCH_FOR) { // We can try search for things
                pdfFindController.executeCommand('find', {query: SEARCH_FOR});
              }
            });
        },
        showPdf(url){
            // Loading document.
            PDFJS.getDocument(url).then(pdfDocument=>{
              // Document loaded, specifying document for the viewer and
              // the (optional) linkService.
              this.pdfViewer.setDocument(pdfDocument);
              this.pdfLinkService.setDocument(pdfDocument, null);
            });
        }

    }
}
</script>
<style lang="scss">
.viewerContainer{
    width: 900px;
    margin: auto;
}

.pdfViewer{
    height: 100%;
    width: 100%;
}
</style>
