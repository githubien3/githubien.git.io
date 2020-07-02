$(document).ready(function() {
    $(".tab_content_login").hide();
    $("ul.tabs_login li:first").addClass("active_login").show();
    $(".tab_content_login:first").show();
    $("ul.tabs_login li").click(function() {
        $("ul.tabs_login li").removeClass("active_login");
        $(this).addClass("active_login");
        $(".tab_content_login").hide();
        var activeTab = $(this).find("a").attr("href");
        if ($.browser.msie) { $(activeTab).show(); } else { $(activeTab).show(); }
        return false;
    });
});
add_action('init', 'insert_js_in_footer');

function insert_js_in_footer() {


    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js');
    wp_enqueue_script('jquery');
    wp_register_script('script', get_bloginfo('template_directory').
        '/js/script.js');
    wp_enqueue_script('script');

}