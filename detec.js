function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  }
  
  function redirectToAppropriatePage() {
    // Verifica si la redirecci├│n ya se hizo previamente
    if (localStorage.getItem("redirected")) return;
  
    // Redirige y marca que ya se hizo la redirecci├│n
    if (isMobile()) {
      localStorage.setItem("redirected", "true");
      window.location.href = "index_mobile.html";
    } else {
      localStorage.setItem("redirected", "true");
      window.location.href = "index.html";
    }
  }
  
  redirectToAppropriatePage();
  
