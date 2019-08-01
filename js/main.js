const $list = $('div#list-container');
const addSkill = $('div button')

addSkill.click(function() {
    let $value = $('input').val()
    let template = $(`
    <div class="list-elem">
        <div class="btn btn-danger">X</div>
        <p>${$value}</p>
    </div>
    `);    
    $list.append(template)
});

$list.on('click', '.btn-danger', function() {
    $(this).closest('.list-elem').fadeOut(1000, function() {
        $(this).remove();
    });
});


