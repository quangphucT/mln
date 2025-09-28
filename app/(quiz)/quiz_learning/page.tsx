'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { Input } from "../../../components/ui/input"
import { Progress } from "../../../components/ui/progress"

type Question = {
  id: number;
  emoji: string;
  answer: string;
  hint: string;
  revealed: boolean;
}

const QuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, emoji: "🏭👷", answer: "CÔNG NHÂN", hint: "Giai cấp lãnh đạo cách mạng", revealed: false },
    { id: 2, emoji: "🌾👩‍🌾", answer: "NÔNG DÂN", hint: "Giai cấp đồng minh tin cậy nhất", revealed: false },
    { id: 3, emoji: "📚🧠", answer: "TRÍ THỨC", hint: "Tầng lớp sáng tạo tri thức", revealed: false },
    { id: 4, emoji: "💼👨‍💼", answer: "TƯ SẢN", hint: "Giai cấp sở hữu tư liệu sản xuất", revealed: false },
    { id: 5, emoji: "🏙️👥", answer: "GIAI CẤP", hint: "Nhóm người có vị trí giống nhau trong sản xuất", revealed: false },
    { id: 6, emoji: "🤝🔄", answer: "LIÊN MINH", hint: "Sự liên kết giữa các giai cấp", revealed: false },
    { id: 7, emoji: "⚒️🚩", answer: "LAO ĐỘNG", hint: "Hoạt động sản xuất của con người", revealed: false },
    { id: 8, emoji: "📈💹", answer: "TƯ BẢN", hint: "Phương thức sản xuất dựa trên lợi nhuận", revealed: false },
    { id: 9, emoji: "🏛️⚖️", answer: "NHÀ NƯỚC", hint: "Tổ chức quyền lực chính trị", revealed: false },
    { id: 10, emoji: "🔄🌐", answer: "CHUYỂN ĐỔI", hint: "Sự thay đổi từ hình thái này sang hình thái khác", revealed: false },
    { id: 11, emoji: "🧠💡", answer: "Ý THỨC", hint: "Nhận thức về vai trò giai cấp", revealed: false },
    { id: 12, emoji: "⚔️👊", answer: "ĐẤU TRANH", hint: "Hoạt động để giành quyền lợi", revealed: false }
  ]);

  const [inputs, setInputs] = useState<{ [key: number]: string }>({});
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [showHiddenWord, setShowHiddenWord] = useState(false);
  
  // Từ khóa bí ẩn sẽ được ghép từ các chữ cái đầu tiên của câu trả lời
  const hiddenKeyword = "CHỦ NGHĨA XÃ HỘI"; // Ghép từ chữ cái đầu tiên của các đáp án
  
  useEffect(() => {
    // Tính toán tiến độ
    const completedQuestions = questions.filter(q => q.revealed).length;
    setProgress((completedQuestions / questions.length) * 100);
    
    // Hiển thị từ khóa bí ẩn khi hoàn thành tất cả câu hỏi
    if (completedQuestions === questions.length) {
      setShowHiddenWord(true);
      setMessage("Chúc mừng! Bạn đã hoàn thành tất cả các câu hỏi và khám phá ra từ khóa bí ẩn!");
    }
  }, [questions]);
  
  const handleInputChange = (id: number, value: string) => {
    const upperValue = value.toUpperCase();
    setInputs({
      ...inputs,
      [id]: upperValue
    });
    
    // Tự động kiểm tra nếu đáp án đúng
    const question = questions.find(q => q.id === id);
    if (question && upperValue === question.answer && !question.revealed) {
      setQuestions(questions.map(q => 
        q.id === id ? { ...q, revealed: true } : q
      ));
      setMessage(`Chính xác! "${question.answer}" là đáp án đúng.`);
    }
  };
  
  const checkAnswer = (id: number) => {
    const question = questions.find(q => q.id === id);
    if (!question) return;
    
    if (inputs[id]?.trim() === question.answer) {
      // Đáp án đúng
      setQuestions(questions.map(q => 
        q.id === id ? { ...q, revealed: true } : q
      ));
      setMessage(`Chính xác! "${question.answer}" là đáp án đúng.`);
    } else {
      // Đáp án sai
      setMessage("Đáp án chưa chính xác, hãy thử lại!");
    }
  };
  
  const showHint = (id: number) => {
    const question = questions.find(q => q.id === id);
    if (question) {
      setMessage(`Gợi ý: ${question.hint}`);
    }
  };
  
  const resetQuiz = () => {
    setQuestions(questions.map(q => ({ ...q, revealed: false })));
    setInputs({});
    setMessage(null);
    setShowHiddenWord(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Ô chữ Liên minh giai cấp</CardTitle>
          <CardDescription className="text-center">
            Hãy đoán các thuật ngữ liên quan đến cấu trúc xã hội và giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Tiến độ hoàn thành</span>
              <span className="text-sm font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
          
          {message && (
            <div className={`mb-4 p-3 rounded-md relative ${message.includes("Chúc mừng") || message.includes("Chính xác") ? "bg-green-100 text-green-800" : message.includes("Gợi ý") ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"}`}>
              {message}
              <button 
                onClick={() => setMessage(null)}
                className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-200"
              >
                ✕
              </button>
            </div>
          )}
          
          <div className="space-y-6">
            {questions.map(question => (
              <div key={question.id} className="border rounded-md p-4 bg-white shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{question.id}</Badge>
                      <span className="text-2xl">{question.emoji}</span>
                    </div>
                    
                    {question.revealed ? (
                      <div className="flex flex-wrap gap-2">
                        {question.answer.split('').map((letter, idx) => (
                          <div key={idx} className="w-8 h-8 border-2 border-green-500 flex items-center justify-center font-bold bg-green-100">
                            {letter}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {Array(question.answer.length).fill('').map((_, idx) => (
                          <div key={idx} className="w-8 h-8 border border-gray-300 flex items-center justify-center font-bold">
                            {question.answer[idx] === ' ' ? ' ' : '_'}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2 md:w-1/3">
                    {!question.revealed && (
                      <>
                        <Input 
                          placeholder="Nhập đáp án" 
                          value={inputs[question.id] || ''}
                          onChange={(e) => handleInputChange(question.id, e.target.value)}
                          className="uppercase"
                        />
                        <div className="flex flex-col gap-2 mt-2">
                          <Button onClick={() => checkAnswer(question.id)} variant="default" className="w-full">
                            Kiểm tra
                          </Button>
                          <Button onClick={() => showHint(question.id)} variant="outline" className="w-full">
                            Xem gợi ý
                          </Button>
                        </div>
                      </>
                    )}
                    {question.revealed && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Đã hoàn thành
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-4">
          <div className="w-full p-4 bg-yellow-100 rounded-md">
            <h3 className="font-bold text-center mb-2">
              {showHiddenWord ? "Từ khóa bí ẩn đã được tiết lộ!" : "Từ khóa bí ẩn (sẽ hiện dần khi trả lời đúng)"}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {hiddenKeyword.split('').map((letter, idx) => {
                // Tính toán xem có hiển thị chữ cái này không (dựa trên số câu hỏi đã hoàn thành)
                const shouldReveal = showHiddenWord || 
                  (idx < questions.filter(q => q.revealed).length && idx < hiddenKeyword.length);
                
                return (
                  <div 
                    key={idx} 
                    className={`w-8 h-8 flex items-center justify-center font-bold rounded-md ${
                      letter === ' ' 
                        ? 'border-none' 
                        : shouldReveal 
                          ? 'bg-yellow-300 border border-yellow-400' 
                          : 'bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {letter === ' ' ? ' ' : (shouldReveal ? letter : '?')}
                  </div>
                );
              })}
            </div>
          </div>
          
          <Button onClick={resetQuiz} variant="outline" className="w-full">
            Làm lại từ đầu
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Về trò chơi Ô chữ</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Trò chơi Ô chữ Liên minh giai cấp giúp học viên ghi nhớ các khái niệm cơ bản về cấu trúc xã hội và vai trò của các giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam.</p>
          <p className="mt-2">Hãy giải đáp tất cả các câu hỏi để khám phá từ khóa bí ẩn liên quan đến con đường phát triển của Việt Nam!</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default QuizPage