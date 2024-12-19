function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerText = "الموقع الجغرافي غير مدعوم في هذا المتصفح.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById("location").innerText = 
        "Latitude: " + latitude + "\nLongitude: " + longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerText = "تم رفض الإذن للوصول إلى الموقع.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerText = "الموقع غير متاح.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerText = "انتهى الوقت للحصول على الموقع.";
            break;
        default:
            document.getElementById("location").innerText = "حدث خطأ غير معروف.";
            break;
    }
}