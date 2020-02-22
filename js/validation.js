
  jQuery().ready(function() {

    // validate form on keyup and submit
    var v = jQuery("#basicform").validate({
      rules: {
        yourname: {
          required: true,
          minlength: 2,
          maxlength: 16
        },
        
		youremail: {
          required: true,
          minlength: 2,
          email: true,
          maxlength: 100,
        },
		
		
		dob: {
			required:true,			
		},
		
		gender: {
			required:true,			
		},
		
		mobnumber: {
			required:true,
			minlength:10,
			maxlength:10,
			number: true
		},	

		materstatus: {
			required:true,
		},
		
		lookfor: {
			required:true,
			
    },
    
    employment: {
      required:true,

    },

    monthlysalary: {
			required:true,
			minlength:3,
			maxlength:10,
			number: true
    },
    
    city: {
      required:true,
    },
		
		address: {
			required:true,
		},
		
		address1: {
			required:true,
		},
		
		pincode: {
			required:true,			
			minlength:6,
			maxlength:6,
			number: true
		},
		
		state: {
			state:true,
		},
		
		city1: {
			city1:true,
		},
		
		employementstatus: {
			estatus:true,
		},
		
		companyname: {
			required:true,
		},
		
		monthsalary: {
			required:true,
			number: true
		},
		
		pancardnumber: {
			required:true,
		},
		
		aadharnumber: {
			required:true,
			minlength:16,
			maxlength:16,
			number: true
		},
		
		passportnumber: {
			required:true,
		},
		
		
      },
	  
      errorElement: "span",
      errorClass: "help-inline-error",
    });

    $(".open1").click(function() {
      if (v.form()) {
        $("#loader").show();
        $('#myModal').show();
        
        return false;
      }


      $(".close").click(function() {
          $("#myModal").hide();
        }
      );

    });


    close

    $(".open2").click(function() {
      if (v.form()) {
        $(".frm").hide("fast");
        $("#sf3").show("slow");
      }
    });
	
	 $(".open3").click(function() {
      if (v.form()) {
        $(".frm").hide("fast");
        $("#sf4").show("slow");
      }
    });
	
    
    $(".back2").click(function() {
      $(".frm").hide("fast");
      $("#sf1").show("slow");
    });

    $(".back3").click(function() {
      $(".frm").hide("fast");
      $("#sf2").show("slow");
    });
	

  });

		

    jQuery.validator.addMethod('lookfor', function (value) {
        return (value != '0');
    }, "Please select what you are looking for");
	
		

    jQuery.validator.addMethod('state', function (value) {
        return (value != '0');
    }, "Please select your State");
	
	

    jQuery.validator.addMethod('city', function (value) {
        return (value != '0');
    }, "Please select your City");
	
	
	
    jQuery.validator.addMethod('estatus', function (value) {
        return (value != '0');
    }, "Please select your Employement Status");