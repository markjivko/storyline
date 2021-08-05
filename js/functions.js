/**
 * Storyline
 * 
 * @title      Storyline Demo
 * @desc       A short storyline demo page
 * @copyright  (c) 2013, Mark Jivko
 * @author     Mark Jivko <stephino.team@gmail.com>
 * @package    storyline
 * @license    GPL v3+, https://gnu.org/licenses/gpl-3.0.txt
 */
$(document).ready(function() {
    // Cache objects
    var objectsCache = {
        frame1: $('.frame1 > .deco'),
        frame2: $('.frame2 > .deco'),
        frame3: $('.frame3 > .deco'),
        frame4: $('.frame4 > .deco'),
        frame5: $('.frame5 > .deco'),
        frame6: $('.frame6 > .deco')
    };
    
    // Prepare the storyline
    $.storyline({
        frames: {
            '.frame1' : {
                onActive: function(coords, event) {
                    // Scale by screen played
                    objectsCache.frame1.css({
                        transform: `scale(${coords.percent.screenPlayed/10 + 0.8})`
                    });
                }
            }, 
            '.frame2' : {
                onActive: function(coords, event){
                    // Rotate by uncentered percent
                    objectsCache.frame2.css({
                        transform: `rotate(${coords.percent.frameUnCentered}deg) scale(0.8)`
                    });
                }
            }, 
            '.frame3' : {
                onActive: function(coords, event) {
                    // Translate by uncentered percent
                    $(this).css({
                        transform: `translate(${coords.percent.frameUnCentered/2}%, 0)`
                    });
                }
            }, 
            '.frame4' : {
                onEnter: function() {
                    objectsCache.frame4.addClass('active');
                },
                onLeave: function() {
                    objectsCache.frame4.removeClass('active');
                }
            }, 
            '.frame5' : {
                onActive: function(coords, event) {
                    // Invert by uncentered percent
                    $(this).css({
                        filter: `invert(${(1 - coords.percent.frameUnCentered/50)/2}) sepia(${(1 - coords.percent.frameUnCentered/50)/2})`
                    });
                }
            }, 
            '.frame6' : {
                onEnter: function() {
                    objectsCache.frame6.addClass('pulse');
                },
                onLeave: function() {
                    objectsCache.frame6.removeClass('pulse');
                }
            }
        },
        guide: '#console' === window.location.hash,
        buildMenu: ['1', '2', '3', '4', '5', '6']
    });
    
    // Change the link
    if ('#console' === window.location.hash) {
        $('body').addClass('view-code');
        $('button').html('Visit repository').click(function() {
            window.location.href = 'https://github.com/Stephino/storyline';
        });
    } else {
        $('button').click(function(){
            window.location.hash = '#console';
            window.location.reload();
        });
    }
});

/*EOF*/