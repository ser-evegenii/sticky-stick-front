export function update(e) {

    e.preventDefault();

    (this).parent().addClass('active');
    (this).parent().siblings().removeClass('active');

    let target;
    target = (this).attr('href');

    ('.tab-content > div').not(target).hide();

    (target).fadeIn(600);

};