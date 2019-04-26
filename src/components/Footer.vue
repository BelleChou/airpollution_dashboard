
<template>
        <div>
          <hr />
          <div class="copyright">
            © <b>{{year}}</b> © Belle WEIWEI. ALL RIGHTS RESERVED.
          </div>
        </div>
      </template>
      
      <script>
      export default {
        name: 'foot',
        data() {
          return {
            year: new Date().getFullYear()
          }
        }
      }
      </script>
      
      <style lang="scss" scoped>
      .copyright {
        font-family: HelveticaNeue;
        font-size: 12px;
        color: #c3c3c3;
      }
      
      .about-us {
        & .about-us-left {
          color: #666666;
          font-family: HelveticaNeue;
        }
        & .about-us-right {
          position: absolute !important;
          right: -10px;
          bottom: 0px;
        }
      }
      
      hr {
        min-width: 100%;
        margin: 0 0;
        background-color: #ececec !important;
        height: 1px;
        border: none;
        margin-top: 40px;
      }
      </style>
      