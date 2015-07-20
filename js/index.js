// HINT:
//
// When you press Enter to submit a new cash register entry, the form will 
// actually submit data and reload the page. You don't want to reload the page. It 
// messes up the running tab. So in order to prevent normal form submission, 
// make sure your form submit handler looks like this:
//

function formatCurrency(total) {
    var neg = false;
    if(total < 0) {
        neg = true;
        total = Math.abs(total);
    }
    return (neg ? "-$" : '$') + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

$('#entry').submit(function(e) {
	e.preventDefault();
	
	// capturing value from input
	var myValue;
	myValue = $('#newEntry').val();

	// adding value to global variable total
	total += parseFloat(myValue);

	// updating value of total
	$('#total').html(formatCurrency(total));

	// adding another row to table body
	$('table tbody').append(
          "<tr>" +
          "  <td></td>" + 
          "  <td>" + formatCurrency(myValue) + "</td>" +
          "</tr>"
        );
});

var total = 0;
