import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 px-4 py-2 text-sm">
              Архитектор цифровых решений
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Максим Северов
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Превращаю сложные бизнес-задачи в элегантные технологические решения
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Icon name="Mail" className="mr-2" size={20} />
              Связаться
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10">
              <Icon name="ArrowDown" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Моя история
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                Родился в семье математиков в Санкт-Петербурге. С 12 лет увлекся программированием, 
                создавая первые игры на Pascal. В 16 лет выиграл международную олимпиаду по информатике.
              </p>
              <p className="text-lg leading-relaxed">
                После школы поступил в ИТМО на факультет информационных технологий. 
                Параллельно с учебой запустил стартап по разработке мобильных приложений, 
                который привлек первые инвестиции уже на втором курсе.
              </p>
              <p className="text-lg leading-relaxed">
                За 8 лет профессионального пути работал с компаниями из США, Германии и Сингапура, 
                создавая решения для fintech, e-commerce и медицинских технологий.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-slate-800/50 border-purple-500/30 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Icon name="GraduationCap" className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">ИТМО, Санкт-Петербург</h3>
                    <p className="text-slate-400 mb-1">Магистр компьютерных наук</p>
                    <p className="text-slate-500 text-sm">2013-2019 • С отличием</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-slate-800/50 border-purple-500/30 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <Icon name="Award" className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">Stanford Online</h3>
                    <p className="text-slate-400 mb-1">Machine Learning Specialization</p>
                    <p className="text-slate-500 text-sm">2020 • Сертификат с отличием</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-slate-800/50 border-purple-500/30 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Icon name="Trophy" className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">AWS Certified</h3>
                    <p className="text-slate-400 mb-1">Solutions Architect Professional</p>
                    <p className="text-slate-500 text-sm">2021 • Сертификат активен</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Опыт и достижения
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-3xl mx-auto">
            8+ лет создания digital-продуктов для бизнеса любого масштаба
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="text-center">
                <div className="inline-flex p-4 bg-purple-500/20 rounded-full mb-4">
                  <Icon name="Rocket" className="text-purple-400" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                <p className="text-slate-400">Запущенных проектов</p>
              </div>
            </Card>
            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="text-center">
                <div className="inline-flex p-4 bg-pink-500/20 rounded-full mb-4">
                  <Icon name="Users" className="text-pink-400" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">2M+</h3>
                <p className="text-slate-400">Активных пользователей</p>
              </div>
            </Card>
            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-500/20 rounded-full mb-4">
                  <Icon name="Star" className="text-blue-400" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">98%</h3>
                <p className="text-slate-400">Удовлетворенность клиентов</p>
              </div>
            </Card>
          </div>

          <div className="mt-16 space-y-6">
            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-purple-500/20 rounded-lg shrink-0">
                  <Icon name="Building2" className="text-purple-400" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Lead Architect</h3>
                      <p className="text-purple-400">TechVision Solutions • Сан-Франциско</p>
                    </div>
                    <span className="text-slate-500">2021-2024</span>
                  </div>
                  <p className="text-slate-300 mb-4">
                    Руководил командой из 15 разработчиков. Спроектировал микросервисную архитектуру 
                    для fintech-платформы с обработкой 100K+ транзакций в день. Сократил время развертывания на 60%.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">Kubernetes</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">GraphQL</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">PostgreSQL</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">React</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-pink-500/20 rounded-lg shrink-0">
                  <Icon name="Zap" className="text-pink-400" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Senior Full-Stack Developer</h3>
                      <p className="text-pink-400">Digital Innovations • Берлин</p>
                    </div>
                    <span className="text-slate-500">2019-2021</span>
                  </div>
                  <p className="text-slate-300 mb-4">
                    Создал e-commerce платформу с AI-рекомендациями, увеличившую конверсию на 40%. 
                    Разработал систему real-time аналитики для 50K+ одновременных пользователей.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">Node.js</Badge>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">Python</Badge>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">MongoDB</Badge>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">Redis</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Что я предлагаю
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-3xl mx-auto">
            Комплексные решения для вашего бизнеса с фокусом на результат
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Icon name="Code" className="text-purple-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Разработка с нуля</h3>
                  <p className="text-slate-400">
                    Full-stack разработка веб-приложений, мобильных приложений и SaaS-платформ. 
                    Современный стек технологий и лучшие практики индустрии.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <Icon name="GitBranch" className="text-pink-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Архитектура систем</h3>
                  <p className="text-slate-400">
                    Проектирование масштабируемых архитектур, рефакторинг legacy-кода, 
                    оптимизация производительности и миграция в облако.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Icon name="Brain" className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI интеграции</h3>
                  <p className="text-slate-400">
                    Внедрение машинного обучения и искусственного интеллекта: 
                    чат-боты, рекомендательные системы, анализ данных.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Icon name="HeartHandshake" className="text-green-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Техническое консультирование</h3>
                  <p className="text-slate-400">
                    Аудит кода, выбор технологического стека, обучение команды, 
                    помощь в масштабировании бизнеса.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Почему выбирают меня
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex p-4 bg-purple-500/20 rounded-full mb-6">
                <Icon name="Shield" className="text-purple-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Гарантия качества</h3>
              <p className="text-slate-400">
                Покрываю код тестами на 90%+, использую CI/CD, 
                предоставляю документацию и гарантию на 6 месяцев.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-pink-500/20 rounded-full mb-6">
                <Icon name="Clock" className="text-pink-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Точные сроки</h3>
              <p className="text-slate-400">
                Использую Agile-методологии с еженедельными спринтами. 
                95% проектов сдаю в срок или раньше.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-500/20 rounded-full mb-6">
                <Icon name="LineChart" className="text-blue-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Фокус на бизнес</h3>
              <p className="text-slate-400">
                Не просто пишу код - решаю бизнес-задачи. 
                Помогаю увеличить прибыль и масштабировать продукт.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-6">
                <Icon name="Sparkles" className="text-green-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Современный стек</h3>
              <p className="text-slate-400">
                Работаю с новейшими технологиями: React, Next.js, Node.js, 
                Python, TypeScript, AWS, Docker.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-orange-500/20 rounded-full mb-6">
                <Icon name="Headphones" className="text-orange-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Поддержка</h3>
              <p className="text-slate-400">
                Всегда на связи в рабочие часы, оперативно отвечаю на вопросы, 
                предоставляю техподдержку после запуска.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-red-500/20 rounded-full mb-6">
                <Icon name="Target" className="text-red-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Индивидуальный подход</h3>
              <p className="text-slate-400">
                Каждый проект уникален. Изучаю специфику бизнеса 
                и создаю решение под конкретные задачи.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Давайте обсудим вашу идею и превратим её в успешный digital-продукт
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              <Icon name="Mail" className="mr-2" size={20} />
              maxim@severov.dev
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (921) 555-12-34
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8">
              <Icon name="Send" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>© 2024 Максим Северов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
