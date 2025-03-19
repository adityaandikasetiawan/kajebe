(function (jQuery) {
    "use strict";
  
    jQuery(document).ready(function () {
      callPricingRange();
    });
  
  })(jQuery);
  
  function callPricingRange() {
    
        
    let slider = document.getElementById("slider");
    let iq_price = document.getElementById("iq-price");
    let iq_period = document.getElementById("iq-period");
    let iq_cpu = document.getElementById("iq-cpu");
    let iq_ram = document.getElementById("iq-ram");
    let iq_harddisk = document.getElementById("iq-harddisk");
    let iq_bandwidth = document.getElementById("iq-bandwidth");
    let iq_setup = document.getElementById("iq-setup");
    let iq_ip = document.getElementById("iq-ip");
    let iq_iptwo = document.getElementById("iq-ip-2");
    let iq_setup_two = document.getElementById("iq-setup-two");
    let iq_link = document.getElementById("btn-url");
  
    iq_price.innerHTML = document.getElementById("price_val1").value;
    iq_period.innerHTML = document.getElementById("period_val1").value;
    iq_cpu.innerHTML = document.getElementById("price_cpu1").value;
    iq_ram.innerHTML = document.getElementById("price_ram1").value;
    iq_harddisk.innerHTML = document.getElementById("price_harddisk1").value;
    iq_bandwidth.innerHTML = document.getElementById("price_bandwidth1").value;
    iq_setup.innerHTML = document.getElementById("price_setup1").value;
    iq_ip.innerHTML = document.getElementById("price_ip1").value;
    iq_iptwo.innerHTML = document.getElementById("price_ip_two1").value;
    iq_setup_two.innerHTML = document.getElementById("price_setup_two1").value;
    iq_link.href = document.getElementById("price_btn_link1").value;
    
    slider.oninput = (function () {
  
      var price_val = "price_val"+slider.value;
      var period_val = "period_val"+slider.value;
      var price_cpu = "price_cpu"+slider.value; 
      var price_ram = "price_ram"+slider.value;
      var price_harddisk = "price_harddisk"+slider.value;
      var price_bandwidth = "price_bandwidth"+slider.value;
      var price_setup = "price_setup"+slider.value;
      var price_ip = "price_ip"+slider.value;
      var price_ip_two = "price_ip_two"+slider.value;
      var price_setup_two = "price_setup_two"+slider.value;
      var plan_link = "price_btn_link"+slider.value;
      
      switch (slider.value) {
          case slider.value:
            iq_price.innerHTML = document.getElementById(price_val).value;
            iq_period.innerHTML = document.getElementById(period_val).value;
            iq_cpu.innerHTML = document.getElementById(price_cpu).value;
            iq_ram.innerHTML = document.getElementById(price_ram).value;
            iq_harddisk.innerHTML = document.getElementById(price_harddisk).value;
            iq_bandwidth.innerHTML = document.getElementById(price_bandwidth).value;
            iq_setup.innerHTML = document.getElementById(price_setup).value;
            iq_ip.innerHTML = document.getElementById(price_ip).value;
            iq_iptwo.innerHTML = document.getElementById(price_ip_two).value;
            iq_setup_two.innerHTML = document.getElementById(price_setup_two).value;
            iq_link.href = document.getElementById(plan_link).value;
          break;
      }
  
      var value = ((this.value - this.min) / (this.max - this.min)) * 100;
      this.style.background =
        "linear-gradient(to right, var(--bs-primary)" + value + "3%, var(--bs-gray-400) " + value + "0%, var(--bs-gray-400) 100%)";
    });
  
    slider.addEventListener("mousedown", function () {
      listener();
      slider.addEventListener("mousemove", listener);
    });
  }