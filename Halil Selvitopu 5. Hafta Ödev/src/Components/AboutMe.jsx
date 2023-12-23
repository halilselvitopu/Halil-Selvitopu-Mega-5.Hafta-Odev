// AboutMe.js
import React from "react";

const AboutMe = () => {
  const openC = () => {
    
    window.open(
      "https://learn.microsoft.com/en-us/dotnet/csharp/",
      "_blank"
    );
  };

  const openMSSQL = () => {
    
    window.open("https://www.microsoft.com/en-us/sql-server/sql-server-downloads", "_blank");
  };

  const openHTML = () => {
    
    window.open("https://www.w3schools.com/html/", "_blank");
  };
  const openCSS = () => {
    
    window.open("https://www.w3schools.com/css/", "_blank");
  };
  const openJS = () => {
    
    window.open("https://www.w3schools.com/js/", "_blank");
  };
  const openReactjs = () => {
    
    window.open("https://react.dev/", "_blank");
  };
  const openNodejs = () => {
    
    window.open("https://nodejs.org/en", "_blank");
  };
  const openReactNative = () => {
    
    window.open("https://reactnative.dev/", "_blank");
  };

  return (
    <section className="aboutme">
      <h1 className="biggest">Halil Selvitopu'nun blog sitesine hoş geldiniz. </h1>
      <h2 className="biggest2">Bildiğim ve Öğrenmekte Olduğum Programlama Dilleri</h2>
      <p className="aboutme-text">
            Merhaba, ben Halil Selvitopu. Konya Gıda ve Tarım Üniversitesi Bilgisayar Mühendisliği 3. Sınıf öğrencisiyim. Yazılım hayatıma .net Core ve Microsoft SQL üzerinden
        ilerlerken zayıf olduğum kısım olan front-end'imi geliştirmek için Mega Yazılım ve Üretken Akademi işbirliği ile hazırlanan React.js programa katılmak istedim. Bu program sayesinde
        full-stack developer olmak için bir adım atmak istiyorum.
      </p>
      <div className="buttons">
        <button className="C#-button" onClick={openC}>
          C#
        </button>
        <button className="MSSQL-button" onClick={openMSSQL}>
          MSSQL
        </button>
        <button className="HTML-button" onClick={openHTML}>
          HTML
        </button>
        <button className="CSS-button" onClick={openCSS}>
          CSS
        </button>
        <button className="JS-button" onClick={openJS}>
          JAVASCRIPT
        </button>
        <button className="REACT.JS-button" onClick={openReactjs}>
          REACT.JS
        </button>
        <button className="NODE.JS-button" onClick={openNodejs}>
          NODE.JS
        </button>
        <button className="REACTNATIVE-button" onClick={openReactNative}>
          REACT NATIVE
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
