/* load this bitch 
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000)
function(){}
*/
///////////////////////////////////////////////
// Awesome home page staggered loading behavior
/////////////////////////////////////////////
setTimeout(
  function() 
  {
    $( ".cineOne" ).fadeIn(2000);
  }, 2000);

setTimeout(
  function() 
  {
    $( ".cineTwo" ).fadeIn(3000);
  }, 2500);


setTimeout(
  function()
  {
    $(".cineThree").fadeIn(4000);
  }, 3000);

setTimeout(

    function()
    {
    $('#social').fadeIn(2000);
}, 4000);

setTimeout(

    function()
    {
    $('#colophon').fadeIn(2000);
}, 4500);





////////////////////////////////////////////////////
// END Awesome home page staggered loading behavior
///////////////////////////////////////////////////
//Start paginating carosel on secondary pages
//////////////////////////////////////////////////
	var cssSlidy = function(newOptions) {
    var options = (function() {
        var mergedOptions = {},
        defaultOptions = {
            timeOnSlide: .03,
            timeBetweenSlides: 30,
            slidyContainerSelector: '#slidy-container', // name of slider container
            slidySelector: '#slidy', // name of slider
            slidyDirection: 'left', // options: left, right
            fallbackFunction: function() {},
            cssAnimationName: 'slidy',
            captionSource: 'data-caption', // options: data-caption, alt, none
            captionBackground: 'rgba(0,0,0,0.3)',
            captionColor: '#fff',
            captionFont: 'Avenir, Avenir Next, Droid Sans, DroidSansRegular, Corbel, Tahoma, Geneva, sans-serif',
            captionPosition: 'bottom', // options: top, bottom
            captionAppear: 'slide', //  options: slide, perm, fade
            captionSize: '5rem', // same units
            captionPadding: '.6rem' // same units
        };
        for (var option in defaultOptions) mergedOptions[option] = defaultOptions[option];
        for (var option in newOptions) mergedOptions[option] = newOptions[option];
        return mergedOptions;
    })(),
        CS = this;
    CS.animationString = 'animation';
    CS.hasAnimation = false;
    CS.keyframeprefix = '';
    CS.domPrefixes = 'Webkit Moz O Khtml'.split(' ');
    CS.pfx = '';
    CS.element = document.getElementById(options.slidySelector.replace('#', ''));
    CS.init = (function() {
        // browser supports keyframe animation w/o prefixes
        if (CS.element.style.animationName !== undefined) CS.hasAnimation = true;
        // browser supports keyframe animation w/ prefixes
        if (CS.hasAnimation === false) {
            for (var i = 0; i < CS.domPrefixes.length; i++) {
                if (CS.element.style[CS.domPrefixes[i] + 'AnimationName'] !== undefined) {
                    CS.pfx = domPrefixes[i];
                    CS.animationString = pfx + 'Animation';
                    CS.keyframeprefix = '-' + pfx.toLowerCase() + '-';
                    CS.hasAnimation = true;
                    // determines CSS prefix required for CSS animations
                    break;
                }
            }
        }
        if (CS.hasAnimation === true) {
            var images = CS.element.getElementsByTagName("img"),
                L = images.length,
                fig = document.createElement('figure'),
                who, temp;
            while (L) {
                temp = fig.cloneNode(false);
                who = images[--L];
                // wraps all images in the slider with <figure> tags
                if (options.captionSource === "alt" || options.captionSource === "data-caption" ) {
                caption = who.getAttribute(options.captionSource); }
                who.parentNode.insertBefore(temp, who);
                if (options.captionSource == "alt" || options.captionSource == "data-caption") {
                 if (caption !== null) {
                     content = document.createElement('figcaption');
                    content.innerHTML = caption;
                    // places captions in each <figure> element, if required
                    }
                }
                temp.appendChild(who);
                if (options.captionSource !== "none" ) {
                if (caption !== null) temp.appendChild(content);
                }
            }
            var figs = CS.element.getElementsByTagName("figure");
            var firstFig = figs[0]; // get the first figure inside the "slidy" element.
            figWrap = firstFig.cloneNode(true); // copy it.
            CS.element.appendChild(figWrap); // add the clone to the end of the images
            var imgCount = images.length, // count the number of images in the slide, including the new cloned element
                totalTime = (options.timeOnSlide + options.timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
                slideRatio = (options.timeOnSlide / totalTime) * 30, // determine the percentage of time an induvidual image is held static during the animation
                moveRatio = (options.timeBetweenSlides / totalTime) * 25, // determine the percentage of time for an individual movement
                basePercentage = 100 / imgCount, // work out how wide each image should be in the slidy, as a percentage.
                position = 0, // set the initial position of the slidy element
                css = document.createElement("style"); // start marking a new style sheet
            // creating css style tag
            css.type = "text/css";
            css.id = options.slidySelector.replace('#', '') + "-css";
            css.innerHTML += options.slidyContainerSelector + " { overflow: hidden; }\n";
            css.innerHTML += options.slidySelector + " { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the inner slider container
            css.innerHTML += options.slidySelector + " figure { float: left; margin: 0; position: relative; display: inline-block; width: " + basePercentage + "%; height: auto; }\n"; // set the width and size pf the inner <figure> elements
            css.innerHTML += options.slidySelector + " figure img { width: 100%; }\n";
        if (options.captionSource == "alt" || options.captionSource == "data-caption") {
            css.innerHTML += options.slidySelector + " figure figcaption { position: absolute; width: 100%; background-color: " + options.captionBackground + "; color: " + options.captionColor + "; font-family: " + options.captionFont + ";";
            var captions = document.getElementsByTagName("figcaption");
            var captionHeight = captions[0].offsetHeight * 2 + parseInt(window.getComputedStyle(captions[0]).fontSize, 10);
            if (options.captionPosition == "top") {
                switch (options.captions) {
                    case 'fade':
                        css.innerHTML += " top: 0; opacity: 0;";
                        break;
                    case 'slide':
                        css.innerHTML += " top: -" + captionHeight + "px; ";
                        break;
                    default:
                        css.innerHTML += " top: 0;";
                }
            } else {
                switch (options.captionAppear) {
                    case 'fade':
                        css.innerHTML += " bottom: 0; opacity: 0;";
                        break;
                    case 'slide':
                        css.innerHTML += " bottom: -" + captionHeight + "px; ";
                        break;
                    default:
                        css.innerHTML += " bottom: 0;";
                }
            }
            css.innerHTML += " font-size: " + options.captionSize + "; padding: " + options.captionPadding + "; " + keyframeprefix + "transition: .5s; }\n";
            css.innerHTML += options.slidySelector + ":hover figure figcaption { opacity: 1; ";
            if (options.captionPosition == "top") {
                css.innerHTML += " top: 0px;";
            } else {
                css.innerHTML += " bottom: 0px;";
            }
            css.innerHTML += " }\n";
            }
            css.innerHTML += "@" + keyframeprefix + "keyframes " + options.cssAnimationName + " {\n";
            if (options.slidyDirection == "right") {
                for (i = imgCount - 1; i > 0; i--) { // 
                    position += slideRatio; // make the keyframe the position of the image
                    css.innerHTML += position + "% { left: -" + (i * 100) + "%; }\n";
                    position += moveRatio; // make the postion for the _next_ slide
                    css.innerHTML += position + "% { left: -" + ((i - 1) * 100) + "%; }\n";
                }
            } else { // the slider is moving to the left    
                for (i = 0; i < (imgCount - 1); i++) { // 
                    position += slideRatio; // make the keyframe the position of the image
                    css.innerHTML += position + "% { left: -" + (i * 100) + "%; }\n";
                    position += moveRatio; // make the postion for the _next_ slide
                    css.innerHTML += position + "% { left: -" + ((i + 1) * 100) + "%; }\n";
                }
            }
            css.innerHTML += "}\n";
            css.innerHTML += options.slidySelector + " { ";
            if (options.slidyDirection == "right") {
                css.innerHTML += "left: " + imgCount * 100 + "%"
            } else {
                css.innerHTML += "left: 0%; "
            }
            css.innerHTML += keyframeprefix + "transform: translate3d(0,0,0); " + keyframeprefix + "animation: " + totalTime + "s " + options.cssAnimationName + " infinite; }\n"; // call on the completed keyframe animation sequence
            // place css style tag
            if (options.cssLocation !== undefined) options.cssLocation.appendChild(css);
            else document.body.appendChild(css);
        } else {
            // fallback function
            options.fallbackFunction();
        }
    })();
}
///////////////////////////////////////////
//End paginating carosel on secondary pages
///////////////////////////////////////////

////////////////////////////////////////////
//Start awesome tate signature drawing effect
/////////////////////////////////////////
var pathObj = {
    "tate_authentic": {
        "strokepath": [
            {
                "path": "M20.8,27.2c2.4,17.2,4.7,34.3,7.2,51.4c0.2,1.2,2.1,0.7,1.9-0.5C27.4,61,25,43.8,22.7,26.7    C22.5,25.4,20.6,26,20.8,27.2L20.8,27.2z",
                "duration": 100
            },
            {
                "path": "M3,28.8c15.8-2.1,30.8-5.5,46.2-9.4c1.2-0.3,0.7-2.2-0.5-1.9C33.5,21.5,18.6,24.8,3,26.9    C1.8,27,1.7,29,3,28.8L3,28.8z",
                "duration": 100
            },
            {
                "path": "M53.3,61.7c-3.3-1.6-5.2-0.5-6.9,2.6c-1.1,2.1-2.6,6-0.4,7.9c4.1,3.5,11.1-7.4,6.9-11    c-0.7-0.6-1.9,0-1.6,1c0.8,3.5,2.2,6.7,4.3,9.5c0.7,1,2.5,0,1.7-1c-2-2.7-3.4-5.7-4.1-9c-0.5,0.3-1.1,0.6-1.6,1    c1.6,1.4,0.6,3.5-0.4,5c-0.3,0.6-0.7,1.1-1.2,1.6c-0.8,1-1,1.5-2.3,0.9c-1.1-0.6-1-0.8-0.7-1.9c0.2-0.8,0.4-1.5,0.7-2.2    c0.9-2,2-3.6,4.5-2.5C53.5,63.9,54.5,62.2,53.3,61.7L53.3,61.7z",
                "duration": 100
            },
            {
                "path": "M66,56.1c0.4,4.5,0.5,10.1,2.8,14.1c0.6,1.1,2.3,0.1,1.7-1c-2.1-3.6-2.1-9-2.5-13.1    C67.9,54.9,65.9,54.9,66,56.1L66,56.1z",
                "duration": 100
            },
            {
                "path": "M61.2,64.6c4.8-1.6,9.6-3.2,14.4-4.9c1.2-0.4,0.7-2.3-0.5-1.9c-4.8,1.6-9.6,3.2-14.4,4.9    C59.5,63.1,60,65,61.2,64.6L61.2,64.6z",
                "duration": 100
            },
            {
                "path": "M83.4,59.4c-0.2,0.1-0.4,0.2-0.7,0.2c-0.9,0.3-1,1.6,0,1.9c1.8,0.5,3.2-1,4.4-2c1.7-1.5,3.1-3.1,3.7-5.3    c0.1-0.5-0.2-1.1-0.7-1.2c-3.7-0.9-7.4,5.1-8.7,7.8c-0.1,0.3-0.2,0.7,0,1c2.9,4.1,9.6,2.5,13.8,2c1.2-0.2,1.3-2.1,0-2    c-1.8,0.2-3.6,0.4-5.5,0.5c-1.6,0.1-4,0.3-5.5-0.6c-1.5-0.9,0.5-3,1.3-3.9c0.8-0.9,2.8-3.3,4.1-3c-0.2-0.4-0.5-0.8-0.7-1.2    c-0.4,1.5-1.2,2.6-2.4,3.6c-0.6,0.6-2.4,2.6-3.4,2.3c0,0.6,0,1.3,0,1.9c0.2-0.1,0.4-0.2,0.7-0.2C85.1,60.8,84.6,58.9,83.4,59.4    L83.4,59.4z",
                "duration": 100
            },
            {
                "path": "M122.2,33.1c1.2,12.6,2.6,25.2,4.2,37.7c0.2,1.2,2,1.3,2,0c0-0.4,0-0.8-0.1-1.2c-0.1-1.3-2-1.3-2,0    c0,0.4,0,0.8,0.1,1.2c0.7,0,1.3,0,2,0c-1.6-12.6-3-25.1-4.2-37.7C124,31.9,122.1,31.9,122.2,33.1L122.2,33.1z",
                "duration": 100
            },
            {
                "path": "M99.9,36.6c15.7-1,31.4-2.2,47.1-3.7c1.2-0.1,1.3-2.1,0-2c-15.7,1.5-31.4,2.7-47.1,3.7    C98.7,34.8,98.7,36.7,99.9,36.6L99.9,36.6z",
                "duration": 100
            },
            {
                "path": "M137,55.4c0.3,3.5,1,11,6.5,9c4.7-1.7,4.7-9,4.1-13c-0.2-1.2-2.1-0.7-1.9,0.5c0.4,2.8,0.5,7-1.4,9.3    c-1,1.2-1.5,1.5-3,0.8c-1.3-0.6-1.6-1-1.9-2.3c-0.3-1.4-0.3-2.9-0.5-4.3C138.9,54.1,136.9,54.1,137,55.4L137,55.4z",
                "duration": 100
            },
            {
                "path": "M156,50.3c-3.6-2.5-4.3,5.8-3.8,7.7c0.5,1.6,1.7,3.1,3.3,3.7c2.2,0.8,3.6-0.6,5.5-1.4    c1.2-0.5,0.2-2.2-1-1.7c-0.8,0.4-1.6,1.1-2.4,1.3c-1.3,0.4-2.5-0.5-3.2-1.6c-0.6-1-0.6-2.2-0.5-3.3c0-0.2,0.7-3.2,1-2.9    C156,52.7,157,51,156,50.3L156,50.3z",
                "duration": 100
            },
            {
                "path": "M164.1,50C164.2,50,164.2,50,164.1,50c0.4-0.5,0.1-1.1-0.3-1.4c0,0-0.1,0-0.1-0.1c-0.5-0.3-1.3,0-1.4,0.6    c-0.3,1.8,0.9,4.4,1.4,6.1c0.8,2.7,1.7,5.4,2.6,8.1c0.4,1.2,2.3,0.7,1.9-0.5c-0.8-2.2-1.5-4.4-2.2-6.7c-0.3-1-0.6-1.9-0.9-2.9    c-0.2-0.8-1.2-2.7-1-3.6c-0.5,0.2-1,0.4-1.4,0.6c0,0,0.1,0,0.1,0.1c-0.1-0.4-0.2-0.9-0.4-1.3c0,0,0,0,0,0.1    C161.7,50,163.4,51,164.1,50L164.1,50z",
                "duration": 100
            },
            {
                "path": "M165.6,56.4c0.6-1.6,1.5-3,2.5-4.4c0.4-0.6,0.9-1.2,1.3-1.7c0.3-0.4,0.5-0.7,0.7-1.1    c0.1-0.2,0.2-0.3,0.3-0.5c0.2-0.3,0.2-0.3-0.2,0c-0.4-0.2-0.8-0.5-1.2-0.7c0,0,0,0.1,0,0.1c0.3-0.4,0.6-0.8,0.9-1.2    c0,0-0.1,0-0.1,0c-1.2,0.1-1.3,2.1,0,2c0,0,0.1,0,0.1,0c0.7-0.1,1-0.6,0.9-1.2c0,0,0-0.1,0-0.1c-0.1-0.5-0.8-0.8-1.2-0.7    c-0.6,0.2-0.8,0.6-1.1,1.1c-0.6,0.9-1.2,1.8-1.8,2.7c-1.2,1.7-2.3,3.3-3,5.3C163.3,57.1,165.2,57.6,165.6,56.4L165.6,56.4z",
                "duration": 100
            },
            {
                "path": "M164.4,55.9c-0.1,0.5,2.5,0.6,2.9,0.6c0.9,0.2,1.8,0.5,2.7,0.9c1.9,0.9,3.5,2.2,4.9,3.8    c0.8,1,2.2-0.4,1.4-1.4c-2-2.4-4.7-4.2-7.7-5c-1.5-0.4-5.4-1.5-6,0.6C162.2,56.6,164.1,57.1,164.4,55.9L164.4,55.9z",
                "duration": 100
            },
            {
                "path": "M177.6,53.6c2.6,0.8,5.7-1.3,4.9-4.3c-0.9-3.3-4.5-1.7-5.8,0.2c-1.8,2.4-2.6,6.2,0,8.4    c3.1,2.5,8.1,1,10.9-1.1c1-0.7,0-2.4-1-1.7c-2.2,1.6-6.8,3.4-8.9,0.7c-1.1-1.5-0.7-3.1,0.1-4.6c0.2-0.3,0.7-1.5,1.1-1.5    c0.5,0.3,1.1,0.5,1.6,0.8c-0.6,1.1-1.4,1.5-2.4,1.1C176.9,51.3,176.4,53.2,177.6,53.6L177.6,53.6z",
                "duration": 100
            },
            {
                "path": "M187.5,47.9c1.2,4.4,2.3,8.9,3.5,13.3c0.3,1,2,0.9,1.9-0.3c-0.1-2-0.4-4-0.9-5.9c-0.3-1.1-0.7-2.2-0.9-3.3    c-0.5-2.6-0.1-8.1,4.4-4.3c1,0.8,2.4-0.6,1.4-1.4c-2.3-1.9-5.8-2.5-7.7,0.4c-0.9,1.4-0.7,3.1-0.4,4.7c0.8,3.3,1.8,6.3,2,9.8    c0.6-0.1,1.3-0.2,1.9-0.3c-1.2-4.4-2.3-8.9-3.5-13.3C189.1,46.1,187.2,46.6,187.5,47.9L187.5,47.9z",
                "duration": 100
            }
        ],
        "dimensions": {
            "width": 400,
            "height": 100
        }
    }
}; 
 
/* 
 Setup and Paint your lazyline! 
 */ 


 $(document).ready(function(){ 
 $('#tate_authentic').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#000"
}).lazylinepainter('paint'); 
 }); setTimeout();

 // Should only do this one time USABILITY
////////////////////////////////////////////
//End awesome tate signature drawing effect
///////////////////////////////////////////
//Start hover behavior HomePage 
//////////////////////////////////////////

/*
var popUp = function(){
    $('#cineOne').mouseover(function(){
        $(this).appendChild
    })
}
*/



// typed.js //////////
///////////////////////

    $(function(){

        $("#typed").typed({
            strings: ["<b>Cause baby,</b> now we've got bad blood ^2000 \nYou know it used to be mad love ^2000 \nSo take a look what you've done ^2000 \nCause baby, now we've got bad blood, hey! ^2000 \nNow we've got problems ^2000 \nAnd I don't think we can solve 'em ^2000 \nYou made a really deep cut ^2000 \nAnd baby, now we've got bad blood, hey!^2000 \n [Verse 1] ^2000 \nDid you have to do this? ^2000 \nI was thinking that you could be trusted ^2000 \nDid you have to ruin what was shiny? ^2000 \nNow it's all rusted ^2000 \nDid you have to hit me where I'm weak? ^2000 \nBaby, I couldn't breathe ^2000 \nAnd rub it in so deep ^2000 \nSalt in the wound like you're laughing right at me ^2000 \n[Pre-Chorus] ^2000 \nOh, it's so sad to ^2000 \nThink about the good times ^2000 \nou and I ^2000 \nChorus] ^2000 \n[Verse 2] ^2000 \nDid you think we'd we be fine? ^2000 \nStill got scars in my back from your knives ^2000 \nSo don't think it's in the past ^2000 \nThese kind of wounds they last and they last ^2000 \n"],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }


////// typed.js for different page connected to the div #typed1

    $(function(){

        $("#typed").typed({
            strings: ["Cause baby, now we've got bad blood ^2000 \nYou know it used to be mad love ^2000 \nSo take a look what you've done ^2000 \nCause baby, now we've got bad blood, hey! ^2000 \nNow we've got problems ^2000 \nAnd I don't think we can solve 'em ^2000 \nYou made a really deep cut ^2000 \nAnd baby, now we've got bad blood, hey!^2000 \n [Verse 1] ^2000 \nDid you have to do this? ^2000 \nI was thinking that you could be trusted ^2000 \nDid you have to ruin what was shiny? ^2000 \nNow it's all rusted ^2000 \nDid you have to hit me where I'm weak? ^2000 \nBaby, I couldn't breathe ^2000 \nAnd rub it in so deep ^2000 \nSalt in the wound like you're laughing right at me ^2000 \n[Pre-Chorus] ^2000 \nOh, it's so sad to ^2000 \nThink about the good times ^2000 \nou and I ^2000 \nChorus] ^2000 \n[Verse 2] ^2000 \nDid you think we'd we be fine? ^2000 \nStill got scars in my back from your knives ^2000 \nSo don't think it's in the past ^2000 \nThese kind of wounds they last and they last ^2000 \n"],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }


////// typed.js for different page connected to the div #typed2


    $(function(){

        $("#typed2").typed({
            strings: ["Cause baby, now we've got bad blood ^2000 \nYou know it used to be mad love ^2000 \nSo take a look what you've done ^2000 \nCause baby, now we've got bad blood, hey! ^2000 \nNow we've got problems ^2000 \nAnd I don't think we can solve 'em ^2000 \nYou made a really deep cut ^2000 \nAnd baby, now we've got bad blood, hey!^2000 \n [Verse 1] ^2000 \nDid you have to do this? ^2000 \nI was thinking that you could be trusted ^2000 \nDid you have to ruin what was shiny? ^2000 \nNow it's all rusted ^2000 \nDid you have to hit me where I'm weak? ^2000 \nBaby, I couldn't breathe ^2000 \nAnd rub it in so deep ^2000 \nSalt in the wound like you're laughing right at me ^2000 \n[Pre-Chorus] ^2000 \nOh, it's so sad to ^2000 \nThink about the good times ^2000 \nou and I ^2000 \nChorus] ^2000 \n[Verse 2] ^2000 \nDid you think we'd we be fine? ^2000 \nStill got scars in my back from your knives ^2000 \nSo don't think it's in the past ^2000 \nThese kind of wounds they last and they last ^2000 \n"],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

//////////// HomePage hover

/*!
 * ContentHover jQuery plugin v0.1
 * http://www.backslash.gr/demos/contenthover-jquery-plugin/
 *
 * Copyright 2011 by Nikos Tsaganos
 * http://www.backslash.gr/
 */
(function($){  
    var methods = {
        init : function(options) {
            var defaults = {  
                data_selector: '.contenthover', // The selector for the element that will be the content of the overlay element to show on hover 
                width: 0,           // Set to 0 to let the plugin figure it out
                height: 0,          // Set to 0 to let the plugin figure it out
                overlay_width: 0,       // The overlay element's width. Set to 0 to use the same as 'width'
                overlay_height: 0,      // The overlay element's height. Set to 0 to use the same as 'height'
                overlay_x_position: 'center',   // [center, left, right] The position of the overlay horizontally (if overlay_width is different from width)
                overlay_y_position: 'bottom',   // [center, top, bottom] The position of the overlay vertically (if overlay_width is different from width)
                overlay_background: '',     // The css background of the overlay element
                overlay_opacity: 1,     // [0-1] The opacity of the overlay element
                effect: 'fade',         // [fade, slide, show] The effect to use
                fade_speed: 400,        // Effect ducation for the 'fade' effect only
                slide_speed: 400,       // Effect ducation for the 'slide' effect only
                slide_direction: 'bottom',  // [top, bottom, right, left] From which direction should the overlay apear, for the slide effect only
                zindex: 2,          // The base z-index value
                wrapper_class: 'ch_wrapper',    // CSS class to add to the wrapper
                normal_class: 'ch_normal',      // CSS class to add to the 'normal' element
                hover_class: 'ch_hover',    // CSS class to add to the 'hover' element
                onshow: function(){},       // Callback function when the 'hover' element is shown
                onhide: function(){}        // Callback function when the 'hover' element is hidden
            },  
            settings = $.extend({}, defaults, options);  
                    
            return this.each(function(){
                var $this = $(this),
                    w = $this.width() ? $this.width() : settings.width,
                    h = $this.height() ? $this.height() : settings.height,
                    overlay_w = settings.overlay_width ? settings.overlay_width : w,
                    overlay_h = settings.overlay_height ? settings.overlay_height : h,
                    $data = $this.next(settings.data_selector);
                    
                if ($data.length) {
                    
                    $data.hide();
                    
                    var $ch_wrapper = $('<div>').addClass('ch_element').addClass(settings.wrapper_class).css({ 'width':w, 'height':h, 'position':'relative', 'overflow':'hidden' }).insertAfter($this);
                    
                    var $ch_normal = $('<div>').addClass(settings.normal_class).css({ 'width':w, 'height':h, 'position':'absolute', 'z-index':settings.zindex }).appendTo($ch_wrapper);
                    $this.clone().appendTo($ch_normal);
                    $this.hide();

                    var $ch_hover = $('<div>').addClass(settings.hover_class).css({ 'width':overlay_w, 'height':overlay_h, 'position':'absolute', 'z-index':settings.zindex-1 }).appendTo($ch_wrapper);
                    $data.clone().show().appendTo($ch_hover);
                    
                    var ch_hover_css = {};
                    
                    if (settings.overlay_background) { 
                        ch_hover_css.background = settings.overlay_background; 
                    }
                    if (settings.overlay_opacity<1) { 
                        ch_hover_css.opacity = settings.overlay_opacity; 
                    }
                    
        
                    if (settings.overlay_x_position=='left') { 
                        ch_hover_css.left = 0;
                    } else if (settings.overlay_x_position=='right') {
                        ch_hover_css.left = (w-overlay_w)+'px';
                    } else {
                        ch_hover_css.left = (w/2 - overlay_w/2)+'px';
                    }
                    
                    
                    if (settings.overlay_y_position=='top') { 
                        ch_hover_css.top = 0;
                    } else if (settings.overlay_y_position=='bottom') {
                        ch_hover_css.top = (h-overlay_h)+'px';
                    } else {
                        ch_hover_css.top = (h/2 - overlay_h/2)+'px';
                    }
                    
                    $ch_hover.css(ch_hover_css); 
                    
                    // slide effect
                    if (settings.effect=='slide'){
            
                        var initial_css = {};
                        
                        if (settings.slide_direction=='top') {
                            initial_css = { top:('-'+overlay_h+'px') }; 
                        }
                        if (settings.slide_direction=='bottom') {
                            initial_css = { top:h+'px' };
                        }
                        if (settings.slide_direction=='left') {
                            initial_css = { left:('-'+overlay_w+'px') };
                        }
                        if (settings.slide_direction=='right') {
                            initial_css = { left:w+'px' };
                        }
                                    
                        $ch_hover.css('z-index',settings.zindex+1).css(initial_css);
                        $ch_wrapper.hover(function () {
                            $ch_hover.stop(true, true).animate({ 'top': ch_hover_css.top, 'left': ch_hover_css.left }, settings.slide_speed, settings.onshow());
                        }, function () {
                            $ch_hover.stop(true, true).animate(initial_css, settings.slide_speed, settings.onhide());
                        });
                        
                                            
                    // fade effect
                    } else if (settings.effect=='fade') {
                        
                        $ch_hover.css('z-index',settings.zindex+1).hide();
                        $ch_wrapper.hover(function () {
                            $ch_hover.stop(true, true).fadeIn(settings.fade_speed, settings.onshow());
                        }, function () {
                            $ch_hover.stop(true, true).fadeOut(settings.fade_speed, settings.onhide());
                        });
                    
                    // just show/hide
                    } else {
                        $ch_hover.css('z-index',settings.zindex+1).hide();
                        $ch_wrapper.hover(function () {
                            $ch_hover.show(0, settings.onshow());
                        }, function () {
                            $ch_hover.hide(0, settings.onhide());
                        });
                    }
                }
            });
        },
        
        stop : function() {
            return this.each(function(){
                var $this = $(this),
                    $data = $this.next('.ch_element');
                    
                $this.show();
                $data.remove();
                $this.unbind('.contenthover');
            });
        },
        
        destroy : function() {
            return this.each(function(){
                $(this).show();
                $('.ch_element').remove();
                $(window).unbind('.contenthover');
            });
        }
    };
    
    $.fn.contenthover = function(method) {  
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method '+ method +' does not exist in contentHover plugin.');
        }  
    }; 
    
})(jQuery);  


