"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("concept");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    content: "",
    type: "", // concept, evolution, vietnam, alliance
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero section with Vietnam flag background */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            'url("https://aslgate.com/wp-content/uploads/2024/02/dsadsad.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "600px",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>

        {/* Content */}
        <div className="container mx-auto py-24 px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl animate-fade-in-up">
              LIÊN MINH GIAI CẤP
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-light drop-shadow-lg animate-fade-in-up animation-delay-300">
              TẦNG LỚP TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 55C1248 50 1344 40 1392 35L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
              fill="white"
              className="dark:fill-black"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        {/* Modern tabbed interface */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg p-1 bg-slate-100 dark:bg-slate-800/50">
              <button
                onClick={() => setActiveTab("concept")}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === "concept"
                    ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                Khái niệm
              </button>
              <button
                onClick={() => setActiveTab("evolution")}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === "evolution"
                    ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                Biến đổi quy luật
              </button>
              <button
                onClick={() => setActiveTab("vietnam")}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === "vietnam"
                    ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                Đặc điểm ở Việt Nam
              </button>
            </div>
          </div>

          {/* Content areas with elegant design */}
          {activeTab === "concept" && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 animate-slide-in-up hover:shadow-3xl hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 animate-gradient-x"></div>
              <div className="px-8 py-10">
                <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200">
                  Khái niệm cơ bản
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Cơ cấu xã hội - giai cấp là sự phân chia xã hội thành các giai
                  cấp, tầng lớp dựa trên vị trí trong hệ thống kinh tế – xã hội.
                  Đây là một khái niệm cốt lõi trong học thuyết Mác-Lênin về cấu
                  trúc xã hội và vai trò của các lực lượng xã hội trong tiến
                  trình lịch sử.
                </p>
                <div className="mt-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-800/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200">
                      Điểm quan trọng
                    </h3>
                  </div>
                  <p className="text-indigo-700 dark:text-indigo-300">
                    Theo quan điểm Mác-Lênin, cơ cấu xã hội - giai cấp luôn gắn
                    liền với trình độ phát triển của lực lượng sản xuất và quan
                    hệ sản xuất trong mỗi hình thái kinh tế xã hội.
                  </p>
                </div>
              </div>
              <div className="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className="border-indigo-200 text-indigo-700 dark:border-indigo-800 dark:text-indigo-400"
                  >
                    Triết học
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-indigo-200 text-indigo-700 dark:border-indigo-800 dark:text-indigo-400"
                  >
                    Mác-Lênin
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  className="text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:scale-105 animate-float"
                  onClick={() => {
                    setModalContent({
                      title: "Khái niệm cơ cấu xã hội - giai cấp",
                      content:
                        "Cơ cấu xã hội - giai cấp là một trong những vấn đề cơ bản của học thuyết Mác-Lênin. Theo C.Mác và Ph.Ăngghen, 'lịch sử của tất cả các xã hội từ trước đến nay là lịch sử đấu tranh giai cấp'.\n\nCơ cấu xã hội - giai cấp là sự phân chia xã hội thành các giai cấp và tầng lớp xã hội khác nhau, được định nghĩa bởi vị trí của họ trong hệ thống quan hệ sản xuất. Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội biến đổi theo hướng xóa bỏ dần các giai cấp đối kháng, hướng tới một xã hội không có sự phân chia giai cấp.\n\nLê-nin đã định nghĩa: 'Giai cấp là những tập đoàn người to lớn, khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử, khác nhau về quan hệ của họ đối với những tư liệu sản xuất, về vai trò của họ trong tổ chức lao động xã hội và do đó, khác nhau về cách thức hưởng thụ và về phần của cải xã hội mà họ được hưởng'.",
                      type: "concept",
                    });
                    setIsModalOpen(true);
                  }}
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          )}

          {activeTab === "evolution" && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 animate-slide-in-up hover:shadow-3xl hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 animate-gradient-x"></div>
              <div className="px-8 py-10">
                <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200">
                  Biến đổi quy luật
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Cơ cấu xã hội – giai cấp thay đổi theo hướng tiến bộ, phù hợp
                  với mục tiêu xây dựng CNXH. Sự biến đổi này tuân theo các quy
                  luật khách quan và có tính quy luật trong tiến trình phát
                  triển xã hội.
                </p>

                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    Tiến trình phát triển
                  </h3>
                </div>

                <div className="mb-8 animate-fade-in-up animation-delay-300">
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-gradient-x transition-all duration-1000 ease-out"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <div className="text-slate-500 dark:text-slate-400">
                      Quá độ ban đầu
                    </div>
                    <div className="font-medium text-blue-600 dark:text-blue-400">
                      76% tiến triển
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover-lift animate-fade-in-up animation-delay-450">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                      Giai đoạn chuyển đổi
                    </h4>
                    <p className="text-blue-800 dark:text-blue-200">
                      Chuyển từ cơ cấu xã hội nhiều thành phần sang cơ cấu xã
                      hội chủ nghĩa
                    </p>
                  </div>
                  <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover-lift animate-fade-in-up animation-delay-600">
                    <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                      Mục tiêu hướng đến
                    </h4>
                    <p className="text-blue-800 dark:text-blue-200">
                      Xóa bỏ chế độ người bóc lột người, thực hiện công bằng xã
                      hội
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                  >
                    Quy luật phát triển
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 animate-float"
                  onClick={() => {
                    setModalContent({
                      title: "Biến đổi quy luật của cơ cấu xã hội - giai cấp",
                      content:
                        "Sự biến đổi cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên CNXH diễn ra theo những quy luật khách quan, phản ánh bản chất của quá trình phát triển xã hội.\n\nQuy luật thứ nhất: Xóa bỏ dần chế độ tư hữu về tư liệu sản xuất và thiết lập chế độ công hữu về tư liệu sản xuất, làm biến đổi cơ bản quan hệ sản xuất và từ đó dẫn đến biến đổi cơ cấu xã hội - giai cấp.\n\nQuy luật thứ hai: Sự phát triển của lực lượng sản xuất mới, đặc biệt là tiến bộ khoa học công nghệ và kinh tế tri thức, tạo ra những biến đổi trong cơ cấu nghề nghiệp, cơ cấu lao động và từ đó dẫn đến biến đổi trong cơ cấu xã hội - giai cấp.\n\nQuy luật thứ ba: Quá trình đô thị hóa và toàn cầu hóa tạo ra những biến đổi trong không gian sống, lối sống và từ đó dẫn đến biến đổi trong cơ cấu xã hội - giai cấp.\n\nTrong điều kiện cụ thể của Việt Nam, những biến đổi này diễn ra trong bối cảnh phát triển kinh tế thị trường định hướng XHCN và hội nhập quốc tế, tạo ra những đặc thù riêng của cơ cấu xã hội - giai cấp Việt Nam.",
                      type: "evolution",
                    });
                    setIsModalOpen(true);
                  }}
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          )}

          {activeTab === "vietnam" && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 animate-slide-in-up hover:shadow-3xl hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-rose-500 to-pink-500 animate-gradient-x"></div>
              <div className="px-8 py-10">
                <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200">
                  Đặc điểm ở Việt Nam
                </h2>

                <div className="flex flex-col space-y-6">
                  <div className="flex bg-rose-50 dark:bg-rose-900/20 rounded-xl overflow-hidden hover-lift animate-fade-in-up animation-delay-150">
                    <div className="w-3 bg-rose-500 animate-pulse-custom"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-rose-700 dark:text-rose-300 mb-3">
                        Thành phần cơ cấu xã hội
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Gồm công nhân, nông dân, trí thức, doanh nhân, phụ nữ,
                        thanh niên và các tầng lớp xã hội khác. Mỗi thành phần
                        có đặc điểm, vai trò và vị trí riêng trong cấu trúc xã
                        hội Việt Nam.
                      </p>
                    </div>
                  </div>

                  <div className="flex bg-rose-50 dark:bg-rose-900/20 rounded-xl overflow-hidden hover-lift animate-fade-in-up animation-delay-300">
                    <div className="w-3 bg-rose-500 animate-pulse-custom"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-rose-700 dark:text-rose-300 mb-3">
                        Vai trò của các lực lượng
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Mỗi lực lượng có vai trò riêng trong công cuộc xây dựng
                        CNXH tại Việt Nam. Giai cấp công nhân giữ vai trò lãnh
                        đạo, nông dân là lực lượng đông đảo, trí thức đóng vai
                        trò quan trọng trong phát triển khoa học công nghệ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                <div>
                  <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                    Đặc thù Việt Nam
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="border-rose-200 text-rose-600 dark:border-rose-800 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all duration-300 hover:scale-105 animate-float"
                  onClick={() => {
                    setModalContent({
                      title: "Đặc điểm cơ cấu xã hội - giai cấp ở Việt Nam",
                      content:
                        "Cơ cấu xã hội - giai cấp ở Việt Nam trong thời kỳ quá độ lên CNXH có những đặc điểm riêng biệt, phản ánh điều kiện lịch sử, kinh tế, văn hóa của đất nước.\n\nThứ nhất, cơ cấu xã hội - giai cấp ở Việt Nam vừa mang tính đặc thù của một nước đi lên CNXH từ một nước nông nghiệp lạc hậu, bỏ qua chế độ tư bản chủ nghĩa, vừa chịu tác động của kinh tế thị trường và hội nhập quốc tế.\n\nThứ hai, liên minh công - nông - trí thức dưới sự lãnh đạo của Đảng là nền tảng của cơ cấu xã hội - giai cấp ở Việt Nam, trong đó giai cấp công nhân giữ vai trò lãnh đạo cách mạng.\n\nThứ ba, trong điều kiện phát triển kinh tế thị trường định hướng XHCN và hội nhập quốc tế, cơ cấu xã hội - giai cấp ở Việt Nam đang có sự biến đổi mạnh mẽ, xuất hiện nhiều tầng lớp xã hội mới như doanh nhân, trí thức công nghệ, lao động tự do...\n\nThứ tư, quá trình đô thị hóa, công nghiệp hóa tạo ra sự dịch chuyển lớn trong cơ cấu xã hội - giai cấp, đặc biệt là sự chuyển dịch từ nông thôn ra thành thị, từ nông nghiệp sang công nghiệp và dịch vụ.",
                      type: "vietnam",
                    });
                    setIsModalOpen(true);
                  }}
                >
                  Tìm hiểu sâu hơn
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Liên minh giai cấp section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-slate-800 dark:text-slate-200">
              Khái niệm liên minh giai cấp, tầng lớp
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH là sự
              liên kết, hợp tác, hỗ trợ nhau..., giữa các giai cấp, tầng lớp xã
              hội nhằm thực hiện nhu cầu và lợi ích của các chủ thể trong khối
              liên minh, đồng thời tạo động lực thực hiện thắng lợi mục tiêu của
              CNXH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg overflow-hidden bg-white dark:bg-slate-900">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Góc độ chính trị
                  </h3>
                </div>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 mr-2 text-emerald-500 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>
                      Tạo nền tảng xã hội cho chế độ mới, thực hiện đoàn kết
                      toàn dân.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 mr-2 text-emerald-500 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>
                      Khối liên minh do Đảng Cộng sản lãnh đạo nhằm giữ vững
                      định hướng CNXH.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <h4 className="font-medium text-emerald-700 dark:text-emerald-300 mb-3">
                    Chính sách liên quan
                  </h4>
                  <ul className="space-y-2 text-emerald-800 dark:text-emerald-200">
                    <li>
                      Chiến lược đại đoàn kết dân tộc: Được thể hiện rõ trong
                      Nghị quyết Đại hội XIII của Đảng
                    </li>
                    <li>Xây dựng hệ thống chính trị vững mạnh</li>
                    <li>Phát huy dân chủ xã hội chủ nghĩa</li>
                  </ul>
                </div>

                <Button
                  className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white w-full dark:bg-emerald-700 dark:hover:bg-emerald-600"
                  onClick={() => {
                    setModalContent({
                      title: "Liên minh giai cấp - Góc độ chính trị",
                      content:
                        "🏛️ Góc độ chính trị\n\nTạo nền tảng xã hội cho chế độ mới, thực hiện đoàn kết toàn dân.\nKhối liên minh do Đảng Cộng sản lãnh đạo nhằm giữ vững định hướng CNXH.\n\nChính sách liên quan:\n- Chiến lược đại đoàn kết dân tộc: Được thể hiện rõ trong Nghị quyết Đại hội XIII của Đảng, nhấn mạnh vai trò của mọi tầng lớp trong xây dựng CNXH.\n- Xây dựng hệ thống chính trị vững mạnh: Nhà nước thúc đẩy sự tham gia của các tầng lớp qua Mặt trận Tổ quốc, các tổ chức chính trị – xã hội.\n- Phát huy dân chủ xã hội chủ nghĩa: Thông qua cơ chế phản biện xã hội, đối thoại chính sách, lấy ý kiến nhân dân trong xây dựng luật pháp.\n\nLiên hệ thực tiễn:\n- Giai cấp công nhân giữ vai trò lãnh đạo, nhưng Nhà nước vẫn chú trọng hợp tác với nông dân, trí thức, doanh nhân, phụ nữ, thanh niên để tạo sự đồng thuận chính trị.\n- Chính sách xây dựng nông thôn mới, phát triển vùng sâu vùng xa, bình đẳng giới, đào tạo trí thức trẻ... đều là biểu hiện của liên minh chính trị đa tầng lớp.",
                      type: "alliance",
                    });
                    setIsModalOpen(true);
                  }}
                >
                  Xem chi tiết
                </Button>
              </div>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden bg-white dark:bg-slate-900">
              <div className="h-2 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-teal-600 dark:text-teal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Góc độ kinh tế
                  </h3>
                </div>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 mr-2 text-teal-500 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>
                      Các lĩnh vực kinh tế phải gắn bó chặt chẽ để đáp ứng nhu
                      cầu của các tầng lớp lao động.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 mr-2 text-teal-500 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>
                      Xây dựng CNXH cần thoả mãn lợi ích kinh tế của công nhân,
                      nông dân, trí thức và các tầng lớp khác.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <h4 className="font-medium text-teal-700 dark:text-teal-300 mb-3">
                    Chính sách liên quan
                  </h4>
                  <ul className="space-y-2 text-teal-800 dark:text-teal-200">
                    <li>Phát triển kinh tế thị trường định hướng XHCN</li>
                    <li>Chiến lược công nghiệp hóa – hiện đại hóa</li>
                    <li>Hỗ trợ nông dân và doanh nghiệp nhỏ</li>
                  </ul>
                </div>

                <Button
                  className="mt-6 bg-teal-600 hover:bg-teal-700 text-white w-full dark:bg-teal-700 dark:hover:bg-teal-600"
                  onClick={() => {
                    setModalContent({
                      title: "Liên minh giai cấp - Góc độ kinh tế",
                      content:
                        "💼 Góc độ kinh tế\n\nCác lĩnh vực kinh tế (công nghiệp, nông nghiệp, dịch vụ, khoa học công nghệ...) phải gắn bó chặt chẽ để đáp ứng nhu cầu và lợi ích của các tầng lớp lao động.\n\nXây dựng CNXH cần thoả mãn lợi ích kinh tế của công nhân, nông dân, trí thức và các tầng lớp khác.\n\nChính sách liên quan:\n- Phát triển kinh tế thị trường định hướng XHCN: Kết hợp lợi ích của các giai cấp, tầng lớp trong cơ chế thị trường nhưng vẫn giữ vai trò điều tiết của Nhà nước.\n- Chiến lược công nghiệp hóa – hiện đại hóa: Tạo điều kiện cho công nhân, trí thức phát huy năng lực trong sản xuất và nghiên cứu.\n- Hỗ trợ nông dân và doanh nghiệp nhỏ: Qua các chương trình như OCOP, tín dụng ưu đãi, chuyển đổi số nông nghiệp.\n\nLiên hệ thực tiễn:\n- Nhà nước thúc đẩy liên kết vùng, hợp tác công – tư, phát triển kinh tế tập thể để gắn kết lợi ích giữa các tầng lớp.\n- Chính sách giảm nghèo đa chiều, an sinh xã hội, giáo dục miễn phí, bảo hiểm y tế toàn dân là cách Nhà nước đảm bảo lợi ích kinh tế cho mọi tầng lớp.",
                      type: "alliance",
                    });
                    setIsModalOpen(true);
                  }}
                >
                  Xem chi tiết
                </Button>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300 mb-6">
                Bản chất của liên minh giai cấp, tầng lớp
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                Đây là tập hợp lực lượng tiến hành cải tạo xã hội cũ và xây dựng
                xã hội mới dưới sự lãnh đạo của Đảng Cộng sản.
              </p>
              <Button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                onClick={() => {
                  setModalContent({
                    title: "Bản chất của liên minh giai cấp, tầng lớp",
                    content:
                      "Liên minh giai cấp, tầng lớp là sự liên kết, hợp tác và hỗ trợ giữa các giai cấp và tầng lớp xã hội nhằm thực hiện nhu cầu, lợi ích chung và tạo động lực cách mạng để xây dựng CNXH.\n\nĐây là tập hợp lực lượng tiến hành cải tạo xã hội cũ và xây dựng xã hội mới dưới sự lãnh đạo của Đảng Cộng sản.\n\nTrong bối cảnh Việt Nam, liên minh giai cấp, tầng lớp mang những đặc điểm sau:\n\n1. Tính đa dạng: Liên minh không chỉ bao gồm các giai cấp cơ bản (công nhân, nông dân) mà còn có trí thức, doanh nhân và các tầng lớp xã hội khác.\n\n2. Tính thống nhất trong đa dạng: Mặc dù có sự khác biệt về địa vị xã hội, lợi ích kinh tế, nhưng các giai cấp và tầng lớp đều có lợi ích chung là xây dựng đất nước phồn vinh, hạnh phúc.\n\n3. Tính phát triển: Liên minh giai cấp, tầng lớp không cố định mà luôn biến đổi theo sự phát triển của xã hội, phản ánh sự vận động của cơ cấu xã hội - giai cấp.\n\n4. Tính lãnh đạo: Liên minh giai cấp, tầng lớp luôn được đặt dưới sự lãnh đạo của Đảng Cộng sản, đảm bảo định hướng xã hội chủ nghĩa.\n\nTheo quan điểm của chủ nghĩa Mác-Lênin, liên minh giai cấp, tầng lớp là điều kiện cần thiết để thực hiện thành công sự nghiệp cách mạng xã hội chủ nghĩa, đảm bảo sự ổn định chính trị và phát triển kinh tế-xã hội bền vững.",
                    type: "alliance",
                  });
                  setIsModalOpen(true);
                }}
              >
                Tìm hiểu sâu hơn
              </Button>
            </div>
          </div>
        </div>

        {/* Section III: Tầm quan trọng */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-slate-800 dark:text-slate-200">
              Tầm quan trọng
            </h2>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-violet-500"></div>
              <div className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Đảm bảo vai trò lãnh đạo
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Liên minh công – nông – trí thức là điều kiện đảm bảo vai trò
                  lãnh đạo của giai cấp công nhân.
                </p>
              </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              <div className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-violet-600 dark:text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Yếu tố quyết định thắng lợi
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Là yếu tố quyết định thắng lợi trong đấu tranh giành chính
                  quyền và xây dựng xã hội mới.
                </p>
              </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-fuchsia-500 to-pink-500"></div>
              <div className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-fuchsia-600 dark:text-fuchsia-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                  Sức mạnh tổng hợp
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Xuất phát từ nhu cầu và lợi ích kinh tế thực tế, liên minh này
                  tạo ra sức mạnh tổng hợp để vượt qua thách thức.
                </p>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 shadow-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">
                Tại các nước xã hội chủ nghĩa và Việt Nam
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Liên minh giai cấp, tầng lớp đóng vai trò quan trọng trong việc:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-700 dark:text-purple-300 font-semibold">
                      1
                    </span>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    Đảm bảo ổn định chính trị và phát triển kinh tế-xã hội bền
                    vững
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-700 dark:text-purple-300 font-semibold">
                      2
                    </span>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    Tạo ra nền tảng xã hội rộng rãi cho sự nghiệp xây dựng CNXH
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-700 dark:text-purple-300 font-semibold">
                      3
                    </span>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">
                    Phát huy sức mạnh đại đoàn kết toàn dân tộc trong sự nghiệp
                    xây dựng và bảo vệ Tổ quốc
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white"
                  onClick={() => {
                    setModalContent({
                      title: "Tầm quan trọng của liên minh giai cấp",
                      content:
                        "Liên minh công – nông – trí thức là điều kiện đảm bảo vai trò lãnh đạo của giai cấp công nhân.\nLà yếu tố quyết định thắng lợi trong đấu tranh giành chính quyền và xây dựng xã hội mới.\nXuất phát từ nhu cầu và lợi ích kinh tế thực tế, liên minh này tạo ra sức mạnh tổng hợp để vượt qua thách thức.\n\nTại các nước xã hội chủ nghĩa nói chung và Việt Nam nói riêng, liên minh giai cấp - tầng lớp có tầm quan trọng đặc biệt:\n\n1. Đảm bảo ổn định chính trị: Liên minh giai cấp - tầng lớp tạo nền tảng xã hội vững chắc cho chế độ xã hội chủ nghĩa, giúp ngăn ngừa các xung đột xã hội và bảo đảm sự đồng thuận trong xã hội.\n\n2. Thúc đẩy phát triển kinh tế-xã hội: Sự hợp tác giữa các giai cấp và tầng lớp tạo điều kiện để huy động tối đa nguồn lực cho công cuộc phát triển đất nước.\n\n3. Giữ vững định hướng xã hội chủ nghĩa: Liên minh giai cấp - tầng lớp dưới sự lãnh đạo của Đảng Cộng sản là yếu tố quan trọng để giữ vững định hướng xã hội chủ nghĩa trong quá trình phát triển.\n\n4. Tạo động lực cách mạng: Liên minh này tạo ra động lực to lớn cho sự nghiệp xây dựng và bảo vệ Tổ quốc xã hội chủ nghĩa.",
                      type: "alliance",
                    });
                    setIsModalOpen(true);
                  }}
                >
                  Tìm hiểu sâu hơn
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section IV: Tại Việt Nam hiện nay */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-slate-800 dark:text-slate-200">
              Tại Việt Nam hiện nay
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Vai trò và tính ưu việt của liên minh giai cấp, tầng lớp trong
              thời kỳ quá độ lên CNXH tại Việt Nam
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    1. Đảm bảo vai trò lãnh đạo của giai cấp công nhân
                  </h3>
                  <Badge className="bg-white/20 text-white mb-6">
                    Yếu tố cốt lõi
                  </Badge>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>
                        Liên minh với nông dân và trí thức là điều kiện tiên
                        quyết
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>
                        Được nhấn mạnh trong các văn kiện Đại hội Đảng
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-2/3 p-8">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Liên minh với nông dân và trí thức là điều kiện tiên quyết
                    để giai cấp công nhân thực hiện vai trò lãnh đạo cách mạng
                    và xây dựng CNXH. Đảng Cộng sản Việt Nam luôn nhấn mạnh
                    nguyên tắc này trong các văn kiện Đại hội.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Thông qua việc phát huy sức mạnh của liên minh
                    công-nông-trí, Đảng và Nhà nước Việt Nam đã thực hiện thành
                    công nhiều chính sách phát triển kinh tế-xã hội, nâng cao
                    đời sống vật chất và tinh thần của nhân dân.
                  </p>
                  <div className="flex justify-end">
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
                      onClick={() => {
                        setModalContent({
                          title:
                            "Đảm bảo vai trò lãnh đạo của giai cấp công nhân",
                          content:
                            '1. Đảm bảo vai trò lãnh đạo của giai cấp công nhân\n\nLiên minh với nông dân và trí thức là điều kiện tiên quyết để giai cấp công nhân thực hiện vai trò lãnh đạo cách mạng và xây dựng CNXH.\n\nĐảng Cộng sản Việt Nam luôn nhấn mạnh nguyên tắc này trong các văn kiện Đại hội.\n\nCụ thể, Đại hội XIII của Đảng xác định: "Tăng cường liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức do Đảng lãnh đạo; phát huy vai trò của giai cấp công nhân là giai cấp lãnh đạo cách mạng thông qua đội tiên phong là Đảng Cộng sản Việt Nam".\n\nTrong thực tiễn, vai trò lãnh đạo của giai cấp công nhân được thực hiện thông qua:\n\n1. Đảng Cộng sản Việt Nam - đội tiên phong của giai cấp công nhân, đại biểu trung thành lợi ích của giai cấp công nhân, nhân dân lao động và của cả dân tộc.\n\n2. Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng.\n\n3. Các tổ chức chính trị-xã hội, đặc biệt là Công đoàn Việt Nam - tổ chức đại diện cho giai cấp công nhân.\n\nĐể đảm bảo vai trò lãnh đạo của giai cấp công nhân trong bối cảnh hiện nay, Đảng và Nhà nước Việt Nam đã có nhiều chính sách nhằm nâng cao chất lượng giai cấp công nhân, tăng cường mối quan hệ gắn bó giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức.',
                          type: "alliance",
                        });
                        setIsModalOpen(true);
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    2. Phát huy sức mạnh tổng hợp
                  </h3>
                  <Badge className="bg-white/20 text-white mb-6">
                    Phát triển toàn diện
                  </Badge>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Chính sách nông thôn mới, chuyển đổi số</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Liên kết vùng, hợp tác công – tư</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-2/3 p-8">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Chính sách như nông thôn mới, chuyển đổi số, giáo dục đại
                    chúng, hỗ trợ doanh nghiệp nhỏ... đều thể hiện sự gắn kết
                    lợi ích giữa các tầng lớp.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Nhà nước thúc đẩy liên kết vùng, hợp tác công – tư, phát
                    triển kinh tế tập thể để hiện thực hóa liên minh kinh tế.
                    Những chương trình và chính sách này góp phần quan trọng vào
                    việc phát huy sức mạnh tổng hợp của toàn xã hội.
                  </p>
                  <div className="flex justify-end">
                    <Button
                      className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
                      onClick={() => {
                        setModalContent({
                          title:
                            "Phát huy sức mạnh tổng hợp trong phát triển đất nước",
                          content:
                            '2. Phát huy sức mạnh tổng hợp trong phát triển đất nước\n\nChính sách như nông thôn mới, chuyển đổi số, giáo dục đại chúng, hỗ trợ doanh nghiệp nhỏ... đều thể hiện sự gắn kết lợi ích giữa các tầng lớp.\n\nNhà nước thúc đẩy liên kết vùng, hợp tác công – tư, phát triển kinh tế tập thể để hiện thực hóa liên minh kinh tế.\n\nCụ thể, một số chính sách và chương trình tiêu biểu:\n\n1. Chương trình mục tiêu quốc gia xây dựng nông thôn mới: Kết hợp đầu tư của nhà nước với huy động sức dân, tạo điều kiện cho nông dân phát triển sản xuất, cải thiện đời sống.\n\n2. Chương trình chuyển đổi số quốc gia: Tạo cơ hội cho mọi tầng lớp nhân dân tiếp cận với công nghệ số, thu hẹp khoảng cách phát triển giữa các vùng miền.\n\n3. Phát triển kinh tế tập thể, hợp tác xã kiểu mới: Tạo môi trường cho liên kết giữa nông dân với doanh nghiệp, giữa sản xuất nhỏ với thị trường lớn.\n\n4. Chương trình "Mỗi xã một sản phẩm" (OCOP): Phát huy lợi thế của địa phương, gắn sản xuất với thị trường, tạo việc làm và thu nhập cho người dân nông thôn.\n\n5. Chính sách phát triển nguồn nhân lực chất lượng cao: Đào tạo, bồi dưỡng đội ngũ lao động đáp ứng yêu cầu của cuộc Cách mạng công nghiệp lần thứ tư.\n\nViệc thực hiện đồng bộ các chính sách này đã góp phần tạo ra sự phát triển hài hòa giữa các vùng miền, các lĩnh vực kinh tế và các tầng lớp xã hội, từ đó phát huy sức mạnh tổng hợp của toàn xã hội trong sự nghiệp xây dựng và bảo vệ Tổ quốc.',
                          type: "alliance",
                        });
                        setIsModalOpen(true);
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-lg bg-white dark:bg-slate-900 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 bg-gradient-to-br from-violet-600 to-purple-600 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    3. Thực hiện công bằng xã hội và an sinh
                  </h3>
                  <Badge className="bg-white/20 text-white mb-6">
                    Chính sách xã hội
                  </Badge>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Giảm nghèo đa chiều</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>Bảo hiểm y tế toàn dân</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-2/3 p-8">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Các chương trình giảm nghèo đa chiều, bảo hiểm y tế toàn
                    dân, giáo dục miễn phí là biểu hiện cụ thể của việc thỏa mãn
                    lợi ích kinh tế – xã hội cho mọi tầng lớp.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Những chính sách an sinh xã hội này góp phần làm giảm khoảng
                    cách giàu nghèo, tạo điều kiện cho các tầng lớp nhân dân
                    cùng hưởng thành quả phát triển, từ đó củng cố niềm tin vào
                    con đường đi lên chủ nghĩa xã hội.
                  </p>
                  <div className="flex justify-end">
                    <Button
                      className="bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-700 dark:hover:bg-violet-600"
                      onClick={() => {
                        setModalContent({
                          title: "Thực hiện công bằng xã hội và an sinh",
                          content:
                            "3. Thực hiện công bằng xã hội và an sinh\n\nCác chương trình giảm nghèo đa chiều, bảo hiểm y tế toàn dân, giáo dục miễn phí là biểu hiện cụ thể của việc thỏa mãn lợi ích kinh tế – xã hội cho mọi tầng lớp.\n\nCụ thể một số chính sách tiêu biểu:\n\n1. Chương trình mục tiêu quốc gia giảm nghèo bền vững: Áp dụng cách tiếp cận nghèo đa chiều, không chỉ về thu nhập mà còn về tiếp cận các dịch vụ xã hội cơ bản như y tế, giáo dục, nhà ở, nước sạch và vệ sinh, thông tin.\n\n2. Bảo hiểm y tế toàn dân: Nhà nước có chính sách hỗ trợ mức đóng bảo hiểm y tế cho các đối tượng chính sách, người nghèo, người cận nghèo, trẻ em dưới 6 tuổi..., đảm bảo quyền được chăm sóc sức khỏe của mọi người dân.\n\n3. Giáo dục miễn phí và hỗ trợ giáo dục: Miễn học phí cho học sinh tiểu học, hỗ trợ học phí cho học sinh vùng khó khăn, học sinh dân tộc thiểu số; đầu tư cơ sở vật chất trường học ở vùng sâu, vùng xa.\n\n4. Chính sách hỗ trợ nhà ở cho người có công, hộ nghèo, hộ đồng bào dân tộc thiểu số: Góp phần đảm bảo một trong những nhu cầu cơ bản của người dân.\n\n5. Chính sách trợ giúp xã hội thường xuyên và đột xuất: Hỗ trợ các đối tượng yếu thế, bảo trợ xã hội, người khuyết tật, người cao tuổi...\n\nViệc thực hiện đồng bộ các chính sách này không chỉ đảm bảo an sinh xã hội mà còn góp phần thực hiện công bằng xã hội, tạo điều kiện để mọi tầng lớp nhân dân đều được thụ hưởng thành quả phát triển, từ đó củng cố niềm tin vào con đường đi lên chủ nghĩa xã hội mà Đảng và Nhà nước ta đã lựa chọn.",
                          type: "alliance",
                        });
                        setIsModalOpen(true);
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* AI Acknowledgment */}
        <div className="max-w-6xl mx-auto mb-16 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/4 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-orange-600 dark:text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-300 mb-2">
                Phụ lục: Sử dụng AI
              </h3>
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                Minh bạch học thuật
              </Badge>
            </div>
            <div className="md:w-3/4">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Tài liệu này được xây dựng có sự hỗ trợ của công nghệ AI trong
                quá trình tổng hợp thông tin và thiết kế giao diện. Tuy nhiên,
                sinh viên đã kiểm chứng kỹ lưỡng tất cả nội dung để đảm bảo tính
                chính xác và phù hợp với chương trình học.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Tổng hợp tài liệu
                  </span>
                </div>
                <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Thiết kế giao diện
                  </span>
                </div>
                <div className="px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Kiểm chứng nội dung
                  </span>
                </div>
              </div>
              <Button
                className="bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-700 dark:hover:bg-orange-600"
                onClick={() => {
                  setModalContent({
                    title: "Sử dụng AI trong học tập",
                    content:
                      "Minh bạch và có trách nhiệm trong việc sử dụng trí tuệ nhân tạo để hỗ trợ học tập\n\nTrong quá trình xây dựng tài liệu này, chúng tôi đã sử dụng công nghệ AI như một công cụ hỗ trợ, nhưng luôn đảm bảo tính học thuật và trách nhiệm:\n\n1. Công cụ AI được sử dụng để:\n- Tổng hợp và tổ chức thông tin từ nhiều nguồn tài liệu\n- Hỗ trợ thiết kế giao diện trình bày\n- Định dạng nội dung theo cấu trúc học thuật\n\n2. Quy trình kiểm chứng:\n- Đối chiếu với giáo trình và tài liệu tham khảo chính thức\n- Kiểm tra tính nhất quán của thông tin\n- Xác minh các dẫn chứng và ví dụ thực tiễn\n\n3. Trách nhiệm của sinh viên:\n- Hiểu rõ nội dung trước khi trình bày\n- Có khả năng giải thích mọi khía cạnh của tài liệu\n- Sử dụng AI như công cụ hỗ trợ, không thay thế quá trình học tập\n\nChúng tôi cam kết sử dụng công nghệ AI một cách có trách nhiệm, minh bạch và tuân thủ các quy định học thuật của nhà trường.",
                    type: "alliance",
                  });
                  setIsModalOpen(true);
                }}
              >
                Tìm hiểu thêm về việc sử dụng AI
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">
                  Cơ cấu xã hội – giai cấp
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Tài liệu học tập về cơ cấu xã hội và giai cấp trong thời kỳ
                  quá độ lên CNXH
                </p>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="rounded-full h-10 w-10 p-0 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full h-10 w-10 p-0 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full h-10 w-10 p-0 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} Tài liệu học tập - Cơ cấu xã hội và
                giai cấp trong thời kỳ quá độ lên CNXH. Bản quyền thuộc về tác
                giả.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for additional information */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] p-0 overflow-hidden bg-white dark:bg-slate-900 animate-modal-slide-in flex flex-col">
          {/* Header with gradient background */}
          <div
            className={`relative p-6 text-white flex-shrink-0 ${
              modalContent.type === "concept"
                ? "bg-gradient-to-br from-indigo-600 to-purple-700"
                : modalContent.type === "evolution"
                ? "bg-gradient-to-br from-blue-600 to-cyan-700"
                : modalContent.type === "vietnam"
                ? "bg-gradient-to-br from-rose-600 to-pink-700"
                : modalContent.type === "alliance"
                ? "bg-gradient-to-br from-emerald-600 to-teal-700"
                : "bg-gradient-to-br from-slate-600 to-slate-700"
            }`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative flex items-center space-x-4">
              {/* Icon based on content type */}
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                {modalContent.type === "concept" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                )}
                {modalContent.type === "evolution" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                )}
                {modalContent.type === "vietnam" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {modalContent.type === "alliance" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                )}
                {!modalContent.type && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <DialogHeader className="space-y-1">
                  <DialogTitle className="text-2xl font-bold text-white leading-tight">
                    {modalContent.title}
                  </DialogTitle>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs"
                    >
                      {modalContent.type === "concept" && "Khái niệm cơ bản"}
                      {modalContent.type === "evolution" && "Biến đổi quy luật"}
                      {modalContent.type === "vietnam" && "Đặc điểm Việt Nam"}
                      {modalContent.type === "alliance" && "Liên minh giai cấp"}
                    </Badge>
                  </div>
                </DialogHeader>
              </div>
            </div>
          </div>

          {/* Content area - scrollable */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {modalContent.content.split("\n\n").map((paragraph, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  {paragraph.trim() && (
                    <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer with close button - fixed at bottom */}
          <div className="flex-shrink-0 p-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
            <div className="flex justify-end">
              <Button
                onClick={() => setIsModalOpen(false)}
                className={`${
                  modalContent.type === "concept"
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : modalContent.type === "evolution"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : modalContent.type === "vietnam"
                    ? "bg-rose-600 hover:bg-rose-700"
                    : modalContent.type === "alliance"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-slate-600 hover:bg-slate-700"
                } text-white transition-all duration-300 hover:scale-105`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Đã hiểu
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
