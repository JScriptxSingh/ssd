$('#contactForm').submit(function (e) {
    $.ajax({
        url: "https://formspree.io/jassbhamra@outlook.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
    });
})