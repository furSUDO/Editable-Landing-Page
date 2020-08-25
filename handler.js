jQuery(function() {
    //used to build social links
    function socialTemplate(social) {
        var SN = `${social.socialName}`
        var socialName = SN.replace(/(.{1})/g,"$1</span><span>")
        var socialName = socialName.slice(0,-6)
        return `
        <div id="${social.socialName}" class="${social.socialName} link-padding"><a href="${social.url}"><span>${socialName}</a></div>
        `
    }

    //used to color social links
    function hoverColor(social) {
        return `
        .${social.socialName} a:hover {
            color: ${social.hoverColor};
          }
        `
    }

    jQuery.getJSON('editme.json', function(data){
        const sitedata = data[0]
        const socialdata = data[2]
        const {layout,logo,name}=sitedata
        const spanorh1 ="h1"

        if (layout==="logo") {
            document.getElementById('logotext').innerHTML=`<div class="container""><center><img src="${logo}" alt="${name}'s Logo" class="logo"></center></div>`
        } else if (layout==="text") {
            document.getElementById('logotext').innerHTML=`<div class="container""><div class="row"><div class="col-12"><center><${spanorh1} style="padding-top: 10px;">${name}</${spanorh1}></center></div></div></div>`
            console.log('text');
        } else if (layout==="logotext") {
            document.getElementById('logotext').innerHTML=`<div class="container";"><div class="row"><div class="col-12"><center><img src="${logo}" alt="${name}'s Logo" class="logo"></center></div><div class="col-12"><center><${spanorh1} style="padding-top: 10px;">${name}</${spanorh1}></center></div></div></div>`
        }
        document.getElementById('links').innerHTML = `
        ${socialdata.map(socialTemplate).join('')}
        `

        document.getElementById('linkstyle').innerHTML = `
        ${socialdata.map(hoverColor).join('')}
        `

    });});