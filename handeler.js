jQuery(function() {
    function socialTemplate(social) {
        return `
        <a href="${social.link}"><img ></img></a>
        `}
    jQuery.getJSON('editme.json', function(data){
        console.log(data)
        const sitedata = data[0]
        const socialdata = data[1]
        const {layout,logo,name}=sitedata
        const {socialName,url,handel,hoverColor}=socialdata
        
        if (layout==="logo") {
            document.getElementById('logotext').innerHTML=`<div class="container" style="padding-top: 20px;"><center><img src="${logo}" alt="${name}'s Logo" class="logo"></center></div>`
        } else if (layout==="text") {
            document.getElementById('logotext').innerHTML=`<div class="container" style="padding-top: 20px;"><div class="row"><div class="col-12"><center><h1 style="padding-top: 10px;">${name}</h1></center></div></div></div>`
            console.log('text');
        } else if (layout==="logotext") {
            document.getElementById('logotext').innerHTML=`<div class="container" style="padding-top: 20px;"><div class="row"><div class="col-12"><center><img src="${logo}" alt="${name}'s Logo" class="logo"></center></div><div class="col-12"><center><span style="padding-top: 10px;">${name}</span></center></div></div></div>`
        }
        document.getElementById('dynamicsite').innerHTML = `
        
        `
        //document.getElementById('app').textContent = name
    });});