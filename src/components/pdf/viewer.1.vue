<template>
    <div id="viewerContainer">
      <div id="viewer" class="pdfViewer"></div>
    </div>
</template>

<script>

import pdfjs,{PDFJS} from 'pdfjs-dist/webpack'
import 'pdfjs-dist/web/pdf_viewer.css'
import 'pdfjs-dist/web/pdf_viewer.js'
console.info(pdfjs,PDFJS)
// import 'pdfjs-dist/pdf_viewer.js'


export default {
    props:{
        src:String,
    },
    data() {
        return {
            page:1,
            scale:2,
            pdf : null,
        }
    },
    computed: {
    },
    mounted(){
        this.webViewerLoad();
    },
    methods: {
        webViewerLoad() {
            var DEFAULT_URL = this.src;
            var SEARCH_FOR = ''; // try 'Mozilla';

            var container = document.getElementById('viewerContainer');

            // (Optionally) enable hyperlinks within PDF files.
            var pdfLinkService = new PDFJS.PDFLinkService();

            var pdfViewer = new PDFJS.PDFViewer({
              container: container,
              linkService: pdfLinkService,
            });
            pdfLinkService.setViewer(pdfViewer);

            // (Optionally) enable find controller.
            var pdfFindController = new PDFJS.PDFFindController({
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

            // Loading document.
            PDFJS.getDocument(DEFAULT_URL).then(function (pdfDocument) {
              // Document loaded, specifying document for the viewer and
              // the (optional) linkService.
              pdfViewer.setDocument(pdfDocument);

              pdfLinkService.setDocument(pdfDocument, null);
            });
        },
        getViewerConfiguration() {
          return {
            appContainer: document.body,
            mainContainer: document.getElementById('viewerContainer'),
            viewerContainer: document.getElementById('viewer'),
            eventBus: null, // using global event bus with DOM events
            toolbar: {
              container: document.getElementById('toolbarViewer'),
              numPages: document.getElementById('numPages'),
              pageNumber: document.getElementById('pageNumber'),
              scaleSelectContainer: document.getElementById('scaleSelectContainer'),
              scaleSelect: document.getElementById('scaleSelect'),
              customScaleOption: document.getElementById('customScaleOption'),
              previous: document.getElementById('previous'),
              next: document.getElementById('next'),
              zoomIn: document.getElementById('zoomIn'),
              zoomOut: document.getElementById('zoomOut'),
              viewFind: document.getElementById('viewFind'),
              openFile: document.getElementById('openFile'),
              print: document.getElementById('print'),
              presentationModeButton: document.getElementById('presentationMode'),
              download: document.getElementById('download'),
              viewBookmark: document.getElementById('viewBookmark'),
            },
            secondaryToolbar: {
              toolbar: document.getElementById('secondaryToolbar'),
              toggleButton: document.getElementById('secondaryToolbarToggle'),
              toolbarButtonContainer:
                document.getElementById('secondaryToolbarButtonContainer'),
              presentationModeButton:
                document.getElementById('secondaryPresentationMode'),
              openFileButton: document.getElementById('secondaryOpenFile'),
              printButton: document.getElementById('secondaryPrint'),
              downloadButton: document.getElementById('secondaryDownload'),
              viewBookmarkButton: document.getElementById('secondaryViewBookmark'),
              firstPageButton: document.getElementById('firstPage'),
              lastPageButton: document.getElementById('lastPage'),
              pageRotateCwButton: document.getElementById('pageRotateCw'),
              pageRotateCcwButton: document.getElementById('pageRotateCcw'),
              cursorSelectToolButton: document.getElementById('cursorSelectTool'),
              cursorHandToolButton: document.getElementById('cursorHandTool'),
              documentPropertiesButton: document.getElementById('documentProperties'),
            },
            fullscreen: {
              contextFirstPage: document.getElementById('contextFirstPage'),
              contextLastPage: document.getElementById('contextLastPage'),
              contextPageRotateCw: document.getElementById('contextPageRotateCw'),
              contextPageRotateCcw: document.getElementById('contextPageRotateCcw'),
            },
            sidebar: {
              // Divs (and sidebar button)
              outerContainer: document.getElementById('outerContainer'),
              viewerContainer: document.getElementById('viewerContainer'),
              toggleButton: document.getElementById('sidebarToggle'),
              // Buttons
              thumbnailButton: document.getElementById('viewThumbnail'),
              outlineButton: document.getElementById('viewOutline'),
              attachmentsButton: document.getElementById('viewAttachments'),
              // Views
              thumbnailView: document.getElementById('thumbnailView'),
              outlineView: document.getElementById('outlineView'),
              attachmentsView: document.getElementById('attachmentsView'),
            },
            sidebarResizer: {
              outerContainer: document.getElementById('outerContainer'),
              resizer: document.getElementById('sidebarResizer'),
            },
            findBar: {
              bar: document.getElementById('findbar'),
              toggleButton: document.getElementById('viewFind'),
              findField: document.getElementById('findInput'),
              highlightAllCheckbox: document.getElementById('findHighlightAll'),
              caseSensitiveCheckbox: document.getElementById('findMatchCase'),
              findMsg: document.getElementById('findMsg'),
              findResultsCount: document.getElementById('findResultsCount'),
              findStatusIcon: document.getElementById('findStatusIcon'),
              findPreviousButton: document.getElementById('findPrevious'),
              findNextButton: document.getElementById('findNext'),
            },
            passwordOverlay: {
              overlayName: 'passwordOverlay',
              container: document.getElementById('passwordOverlay'),
              label: document.getElementById('passwordText'),
              input: document.getElementById('password'),
              submitButton: document.getElementById('passwordSubmit'),
              cancelButton: document.getElementById('passwordCancel'),
            },
            documentProperties: {
              overlayName: 'documentPropertiesOverlay',
              container: document.getElementById('documentPropertiesOverlay'),
              closeButton: document.getElementById('documentPropertiesClose'),
              fields: {
                'fileName': document.getElementById('fileNameField'),
                'fileSize': document.getElementById('fileSizeField'),
                'title': document.getElementById('titleField'),
                'author': document.getElementById('authorField'),
                'subject': document.getElementById('subjectField'),
                'keywords': document.getElementById('keywordsField'),
                'creationDate': document.getElementById('creationDateField'),
                'modificationDate': document.getElementById('modificationDateField'),
                'creator': document.getElementById('creatorField'),
                'producer': document.getElementById('producerField'),
                'version': document.getElementById('versionField'),
                'pageCount': document.getElementById('pageCountField'),
              },
            },
            errorWrapper: {
              container: document.getElementById('errorWrapper'),
              errorMessage: document.getElementById('errorMessage'),
              closeButton: document.getElementById('errorClose'),
              errorMoreInfo: document.getElementById('errorMoreInfo'),
              moreInfoButton: document.getElementById('errorShowMore'),
              lessInfoButton: document.getElementById('errorShowLess'),
            },
            printContainer: document.getElementById('printContainer'),
            openFileInputName: 'fileInput',
            debuggerScriptPath: './debugger.js',
            defaultUrl: DEFAULT_URL,
          };
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
