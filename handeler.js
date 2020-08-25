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
        const metatags = data[3]
        const {title,description,ogcolor,twitterUsername,keywords,siteurl,ogimage}=metatags
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

        document.getElementById('metatags').innerHTML=`
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="./handeler.js"></script>

        
        <title>${title}</title>
        <link rel="icon" type="image/png" href="${logo}" sizes="32x32">
        <link rel="icon" type="image/png" href="${logo}" sizes="96x96">
        <link rel="apple-touch-icon" sizes="180x180" href="./assets/apple-touch-icon.png">
      
        <meta name="theme-color" content="${ogcolor}">
        <meta property="og:title" content="${title}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteurl}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${ogimage}">
        <meta name="twitter:card" content="summary_large_image">
      
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
      
        <meta name="twitter:card" content="summary">
        <meta name="twitter:image" content="${siteurl}${ogimage}">
        <meta name="twitter:creator" content="${twitterUsername}">
        
        `

        //document.getElementById('app').textContent = name
    });});