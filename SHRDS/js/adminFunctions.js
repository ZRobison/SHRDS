function adminPageSelect() {
    if ($('#adminRadio1').is(":checked")) {
        window.location.hash = "#adminPasswordChange";
    } else if ($('#adminRadio2').is(":checked")) {
        window.location.hash = "#adminMetadata";
    }
}
