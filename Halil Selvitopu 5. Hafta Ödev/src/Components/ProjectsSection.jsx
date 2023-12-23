// ProjectsSection.js
import React from "react";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h1 className="titles">Şu Ana Kadar Mega Yazılım Akademisi ve Üretken Akademi Ortaklığında Yaptığım Projeler</h1>
      
      <div className="project-box-container">
        <div className="project-box info-box">
          <h1>Hesap Makinesi Uygulaması</h1>
          <p>Eğitmenimizin bizden istediği basit bir hesap makinesi tasarımı.</p>
          <p>Bu projede sadece HTML kullandım.</p>
          <div className="project-links">
            <a
              href="https://github.com/halilselvitopu/Mega-Yazilim-Hesap-Makinesi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          
        </div>
        
        <div className="project-box info-box">
          <h1>Sudoku</h1>
          <p>Eğitmenimizin bizden istediği bir sudoku tasarımı.</p>
          <p>Bu projede HTML ve CSS kullandım.</p>
          <div className="project-links">
            <a
              href="https://github.com/halilselvitopu/SudokuMega"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-box info-box">
          <h1>Blog Sitesi</h1>
          <p>Eğitmenimizin bizden istediği ufak çapta bir blog sayfası</p>
          <p>Bu projede HTML, CSS ve giriş seviyesinde JavaScript kullandım.</p>
          <div className="project-links">
            <a
              href="https://github.com/halilselvitopu/3.-hafta-odev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          
        </div>
        <br></br>
        <div className="project-box info-box">
          <h1>Resim Galerisi</h1>
          <p>Eğitmenimizin bizden istediği rastgele resimler üreten bir web sitesi.</p>
          <p>Bu projede HTML, CSS ve JavaScript kullandım.</p>
          <div className="project-links">
            <a
              href="https://github.com/halilselvitopu/MegaYazilim4.Hafta"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          
        </div>
        <div className="project-box info-box">
          <h1>Mega Yazılım Akademisi Nedir?</h1>
          <p>Yazılım dünyasına adım atmak ya da kendini geliştirmek isteyenler için Meram Belediyesi tarafından oluşturulan bir akademidir.</p>
          
          <div className="project-links">
            <a
              href="https://www.meram.bel.tr/haber/mega-yazilim-akademisi-basladi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Sitesi
            </a>
          </div>
          
        </div>
        <div className="project-box info-box">
          <h1>Üretken Akademi Nedir?</h1>
          <p>Üretken Akademi programlarına katılarak sıfırdan yazılım öğrenip kariyerine başlayabilir veya girişimciliği öğrenerek kendi şirketini kurabilirsin.</p>
          
          <div className="project-links">
            <a
              href="https://uretkenakademi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Sitesi
            </a>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default ProjectsSection;
