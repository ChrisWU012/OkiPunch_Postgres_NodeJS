let id = 1;

$.ajax({
    type: "GET",
    url: `http://localhost:8000/employee/salary/${id}`,
    success: function (result) {
        console.log(result);
        $("#employee_punch_workingHours").append(result.month_working_hour);
        $("#employee_punch_hourlyRate").append(result.hourly_rate);
        $("#employee_punch_totalSalary").append(result.month_salary);
    }
});


























