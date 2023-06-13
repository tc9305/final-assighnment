

$(document).ready(function() {
    var currentQuestion = 0;
    var score = 0;

    function showQuestion() {
        var question = questions[currentQuestion];
        $("#question").text(question.question);
        $("#options").empty();

        for (var i = 0; i < question.answers.length; i++) {
            var answer = question.answers[i][0];
            var nextQuestion = question.answers[i][1];
            var option = $("<div class='option'></div>");
            var radioBtn = $("<input type='radio' id='option" + (i + 1) + "' name='option'>");
            var label = $("<label for='option" + (i + 1) + "'>" + answer + "</label>");

            radioBtn.val(nextQuestion);
            option.append(radioBtn);
            option.append(label);
            $("#options").append(option);
        }
    }

    function showResult() {
        var result = finalAnswers[score.toString()];
        $("#question").text("結果如下 給你建議");
        $("#options").empty();
        $("#options").append("<p>" + result + "</p>");
        $("#startButton").hide();
    }

    $("#startButton").click(function() {
        if (currentQuestion === 0) {
            $("#startButton").val("下一題");
        }

        var selectedOption = $("input[name='option']:checked").val();
        if (selectedOption) {
            score += selectedOption === "A" || selectedOption === "B" || selectedOption === "C" || selectedOption === "D" ? 1 : 0;

            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
            } else {
                showResult();
            }
        }
    });

    showQuestion();
});
