App.MapsView = App.BaseView.extend

	template: App.templates['dishes/maps']

	onAfterRender : ->
		long =  @model.get('restaurant').location.coordinates[0]
		lat =  @model.get('restaurant').location.coordinates[1]
		directionsDisplay = new google.maps.DirectionsRenderer()
		console.log(directionsDisplay)
		map = 0
		initialize = ->
		  start = new google.maps.LatLng(App.position.coords.latitude, App.position.coords.longitude)
		  end = new google.maps.LatLng(lat, long)
		  mapOptions =
		    zoom: 16
		    disableDefaultUI: true
		    draggable: true
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		    center: start
		  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
		  directionsDisplay.setMap map
		  calcRoute start, end
		calcRoute = (start, end) ->
		  request =
		    origin: start
		    destination: end
		    travelMode: google.maps.DirectionsTravelMode.WALKING
		  directionsService = new google.maps.DirectionsService()
		  directionsService.route request, (response, status) ->
		  	if status is google.maps.DirectionsStatus.OK
		   		directionsDisplay.setDirections(response)
		   		setTimeout ->
		   			bounds = new google.maps.LatLngBounds()
		   			myLatLng = new google.maps.LatLng(lat, long)
		   			start = new google.maps.LatLng(App.position.coords.latitude, App.position.coords.longitude)

		   			bounds.extend myLatLng
		   			bounds.extend start
		   			map.fitBounds bounds
		   			#map.setCenter(myLatLng)
		   			google.maps.event.trigger map, "resize"
		   		, 500
		initialize()



