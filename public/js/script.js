var allData = {
'dpv_match_code': {
        "Y":"Confirmed; entire address is present in the USPS data. To be certain the address is actually deliverable, verify that the dpv_vacant field has a value of N and the active field has a value of Y.",
        "N":"Not confirmed; address is not present in the USPS data.",
        "S":"Confirmed by ignoring secondary info; the main address is present in the USPS data, but the submitted secondary information (apartment, suite, etc.) was not recognized.",
        "D":"Confirmed but missing secondary info; the main address is present in the USPS data, but it is missing secondary information (apartment, suite, etc.).",
    },
'dpv_footnotes':{
    "AA":"Street address, city, state, and ZIP are all valid.",
    "A1":"Address is invalid.",
    "BB":"Entire address is valid.",
    "CC":"The submitted secondary information (apartment, suite, etc.) was not recognized.",
    "F1":"Military or diplomatic address.",
    "G1":"General delivery address.",
    "M1":"Primary number (e.g., house number) is missing.",
    "M3":"Primary number (e.g., house number) is invalid.",
    "N1":"Address is missing secondary information (apartment, suite, etc.).",
    "PB":"PO Box street style address.",
    "P1":"PO, RR, or HC box number is missing.",
    "P3":"PO, RR, or HC box number is invalid.",
    "RR":"Confirmed address with private mailbox (PMB) info.",
    "R1":"Confirmed address without private mailbox (PMB) info.",
    "R7":"Confirmed as a valid address that doesn't currently receive US Postal Service street delivery.",
    "U1":"Address has a Unique ZIP Code. Some organizations (such as large businesses, universities, or government agencies) receive an incredible volume of mail. For efficiency, the USPS may assign organizations like these their own unique ZIP Code consisting of a single delivery point. All mail addressed to a unique ZIP Code is routed internally by the assigned organization rather than by the USPS. If an address includes a valid unique ZIP Code, then the address is always marked deliverable.",
},
'dpv_cmra':{
    "Y": "Address is associated with a valid CMRA.",
    "N":"Address is not associated with a valid CMRA."
},
'dpv_vacant':{
    "Y":"Address is vacant.",
    "N":"Address is occupied."
},
'active': {
    "Y":"Address is active.",
    "N":"Address is inactive."
},
'footnotes':{
"A#":"Corrected ZIP Code - The address was found to have a different 5-digit ZIP Code than the one submitted. The correct ZIP Code is shown in the zipcode field.",
"B#":"Corrected city/state spelling - The city/state spelling  The spelling of the city name and/or state abbreviation in the submitted address was found to be different than the standard spelling. The standard spellings are shown in the city_name and state_abbreviation fields.",
"C#":"Invalid city/state/zip. - The ZIP Code in the submitted address could not be found because neither a valid city and state, nor valid 5-digit ZIP Code was present. The API recommends that the customer check the accuracy of the submitted address.",
"D#":"No ZIP + 4 assigned - This address is not present in the USPS data. The API recommends that the customer check the accuracy of the submitted address.",
"E#":"Same ZIP for multiple - Multiple records were returned, with the same 5-digit ZIP Code.",
"F#":"Address not found - The address, exactly as submitted, could not be found in the city, state, or ZIP Code provided. Either the primary number is missing, the street is missing, or the street is too badly misspelled to understand.",
"G#":"Used addressee data - Information in the addressee input field was determined to be part of the address. It was moved out of the addressee field and incorporated into the street field.",
"H#":"Missing secondary number - The address as submitted is missing a secondary number (apartment, suite, etc.). The API recommends that the customer check the accuracy of the submitted address and add the missing secondary number to ensure the correct Delivery Point Barcode (DPBC).",
"I#":"Insufficent/incorrect address data - More than one ZIP+4 Code was found to satisfy the address as submitted. The submitted address did not contain sufficiently complete or correct data to determine a single ZIP+4 Code. the API recommends that the customer check the accuracy and completeness of the submitted address. For example, a street may have a similar address at both the north and south ends of the street.",
"J#":"Dual address - The input contained two addresses. For example: 123 MAIN ST PO BOX 99.",
"K#":"Cardinal rule match - Although the address as submitted is not valid, we were able to find a match by changing the cardinal direction (North, South, East, West). The cardinal direction we used to find a match is found in the components.",
"L#":"Changed address component - An address component (i.e., directional or suffix only) was added, changed, or deleted in order to achieve a match.",
"LL#":"Flagged address for LACSLink - The input address matched a record that was LACS-indicated, that was submitted to LACSLink for processing. This does not mean that the address was converted; it only means that the address was submitted to LACSLink because the input address had the LACS indicator set.",
"LI#":"Flagged address for LACSLink - The input address matched a record that was LACS-indicated, that was submitted to LACSLink for processing. This does not mean that the address was converted; it only means that the address was submitted to LACSLink because the input address had the LACS indicator set.",
"M#":"Corrected street spelling - The spelling of the street name was changed in order to achieve a match.",
"N#":"Fixed abbreviations - The delivery address was standardized. For example, if STREET was in the delivery address, the API will return ST as its standard spelling.",
"O#":"Mulitple ZIP + 4; lowest used - More than one ZIP+4 Code was found to satisfy the address as submitted. The lowest ZIP+4 add-on may be used to break the tie between the records.",
"P#":"Better address exists - The delivery address is matchable, but it is known by another (preferred) name. For example, in New York, NY, AVENUE OF THE AMERICAS is also known as 6TH AVE. An inquiry using a delivery address of 39 6th Avenue would be flagged with Footnote P.",
"Q#":"Unique ZIP match - The address has a unique ZIP Code",
"R#":"No match; EWS: Match soon - The delivery address is not yet matchable, but the US Postal Service Early Warning System file indicates that a match will be available soon.",
"S#":"Unrecognized secondary address - The secondary information (apartment, suite, etc.) was not recognized as part of the USPS data.",
"T#":"Multiple response due to magnet street syndrome - The search resulted in a single response; however, the record matched was flagged as having magnet street syndrome, and the input street name components (pre-directional, primary street name, post-directional, and suffix) did not exactly match those of the record. A magnet street is one having a primary street name that is also a suffix or directional word, having either a post-directional or a suffix (i.e., 2220 PARK MEMPHIS TN logically matches to a ZIP+4 record 2200-2258 PARK AVE MEMPHIS TN 38114-6610), but the input address lacks the suffix AVE which is present on the ZIP+4 record. The primary street name PARK is a suffix word. The record has either a suffix or a post-directional present. Therefore, in accordance with CASS requirements, a ZIP+4 Code must not be returned. The multiple response return code is given since a no match would prevent the best candidate.",
"U#":"Unofficial city name - The city name in the submitted address is an alternate city name that is not accepted by the US Postal Service. The preferred city name is output in the city_name field.",
"V#":"  Unverifiable city/state - The city and state in the submitted address could not be verified as corresponding to the given 5-digit ZIP Code. This comment does not necessarily denote an error; however, SmartyStreets recommends that the customer check the accuracy of the city and state in the submitted address.",
"W#":"Invalid delivery address - The USPS does not provide street delivery service for this ZIP Code. The USPS requires the use of a PO Box, General Delivery, or Postmaster for delivery within this ZIP Code.",
"X#":"Unique ZIP Code - The address has a unique ZIP Code.",
"Y#":"Military match - The address has a military or diplomatic ZIP Code.",
"Z#":"Matched with ZIPMOVE - The ZIPMOVE product shows which ZIP+4 records have moved from one ZIP Code to another. If an input address matches a ZIP+4 record which the ZIPMOVE product indicates has moved, the search is performed again in the new ZIP Code.",
 }
};


$(document).ready(function(){
    //Toggle for navbar
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
        var activeTab = $(e.target).text(); // Get the name of active tab
        var previousTab = $(e.relatedTarget).text(); // Get the name of previous tab
        if (activeTab == "More Information") {
            $("#searchResults, #analysis").hide();
        } else {
            $("#searchResults, #analysis").show();
            $(this).closest('form').find("input[type=text], textarea").val("");
            $("#metadata").empty();
            $("#components").empty();
            $("#analysisRaw").empty();
            $("#searchResultsCard").empty();
            $(".card-header").removeClass("bg-primary text-white");
            $(".card-header").removeClass("bg-danger");
            $("#primary").removeClass("disabled");
            $("#resets").addClass("disabled");
        }
     });

    //Reset
    $(".resets").on("click", function(event){
        event.preventDefault();
        $(".results").html("Awaiting input");
        $(this).closest('form').find("input[type=text], textarea").val("");
        $("#metadata").empty();
        $("#components").empty();
        $("#analysisRaw").empty();
        $("#searchResultsCard").empty();
        $(".card-header").removeClass("bg-primary text-white");
        $(".card-header").removeClass("bg-danger");
        $("#primary").removeClass("disabled");
        $("#resets").addClass("disabled");

    });

    //Form
    $("form").on("submit", function(event){
        event.preventDefault();
        $("#primary").addClass("disabled");
        $(".resets").removeClass("disabled");
        var formdata = $("form").serializeArray();

        const data = Object.fromEntries(new FormData(event.target).entries());

        var usaddress = $('#us-tab').hasClass('active');
        var intaddress = $('#international-tab').hasClass('active')

        console.log(data);
        if (usaddress == true) {
            //Build URL - Server side call
            var url = "https://us-street.api.smartystreets.com/street-address?" +
                    "&candidates=" + "10" +
                    "&street=" + data.street +
                    "&city=" + data.city +
                    "&state=" + data.state +
                    "&zipcode=" + data.zipcode +
                    "&urbanization=" + data.urbanization +
                    "&match=" + data.match +
                    "&license=" + "us-core-cloud" +
                    "&key=" + "TBD";
        } else if (intaddress == true) {

        }

        //Build URL - Server side call


        console.log(url);
        //ajax request to server
        $.ajax({
          contentType: 'json',
          type:'GET',
          url: url,
          host: 'us-street.api.smartystreets.com',
          data: {
            format: 'json'
          },
          error: function(data){
            $('#result').html('An error has occurred.');
          },
          success: function( data ) {
            if (data.length < 1) {
                $(".results").html("No matches found.");
                $(".card-header").addClass("bg-danger");
            } else {
            var numMatches = data.length;
            $( "#result" ).html( "<strong>" + data + "</strong>" );
            $(".results").html("Maches found");
            $(".card-header").addClass("bg-primary text-white");
            var metadata = data[0].metadata; //Metadata column
            var components = data[0].components; //Components column
            var analysis = data[0].analysis; //Analysis column
            for (var i=0; i<data.length; i++) {
                 $("#searchResultsCard").append("<p>" + "Address entered: " + data[i].delivery_line_1 + "</p>");
                 $("#searchResultsCard").append("<p>" + data[i].last_line + "</p>");
            }
            for (m in metadata) {
                $("#metadata").append("<p>" + m + " : " + metadata[m] + "</p>");
                }
            for (c in components) {
                $("#components").append("<p>" + c + " : " + components[c] + "</p>");
                }
            for (a in analysis) {
                $("#analysisRaw").append("<p>" + a + " : " + analysis[a] + "</p>");
                   if(analysis[a].length > 2) {
                       var arr = analysis[a].match(/.{1,2}/g);
                       for (item in arr) {
                           $("#searchResultsCard").append("<p>" + allData[a][arr[item]] + "</p>");
                       }
                   }
                   else {
                       $("#searchResultsCard").append("<p>" + allData[a][analysis[a]] + "</p>");
                    }
               }
            }
          }
        });
    });
});