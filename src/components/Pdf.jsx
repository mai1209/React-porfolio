
    const downloadPDF = () => {
      fetch('src/img/Cv.Mai.pdf')
        .then(response => {
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement('a');
          a.href = url;
          a.download = 'Cv.Mai.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        });
    };
  
   
  
  export default downloadPDF;