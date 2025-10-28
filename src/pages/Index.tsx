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
              Инженер по развертыванию и сопровождению ПО
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Максим Северов
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Обеспечиваю надежную работу и развертывание программных продуктов
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
                Родился в Москве. С 14 лет увлекся системным администрированием и автоматизацией. 
                Первый опыт работы с серверами получил, помогая настраивать компьютерный класс в школе.
              </p>
              <p className="text-lg leading-relaxed">
                После школы поступил в МГТУ им. Баумана на факультет информатики и систем управления. 
                С третьего курса начал работать DevOps-инженером в небольшой IT-компании, 
                где получил первый практический опыт развертывания продуктов.
              </p>
              <p className="text-lg leading-relaxed">
                За 6 лет профессиональной карьеры прошел путь от младшего DevOps-инженера 
                до специалиста по развертыванию и сопровождению, работая с проектами 
                в e-commerce, финансовом секторе и EdTech.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 bg-slate-800/50 border-purple-500/30 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Icon name="GraduationCap" className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">МГТУ им. Баумана</h3>
                    <p className="text-slate-400 mb-1">Бакалавр информатики и систем управления</p>
                    <p className="text-slate-500 text-sm">2016-2020 • Красный диплом</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-slate-800/50 border-purple-500/30 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <Icon name="Award" className="text-pink-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">Яндекс.Практикум</h3>
                    <p className="text-slate-400 mb-1">DevOps для эксплуатации и разработки</p>
                    <p className="text-slate-500 text-sm">2021 • Диплом</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-slate-800/50 border-purple-500/30 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Icon name="Trophy" className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">Certified Kubernetes</h3>
                    <p className="text-slate-400 mb-1">Administrator (CKA)</p>
                    <p className="text-slate-500 text-sm">2022 • Сертификат активен</p>
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
            6+ лет обеспечения стабильной работы и развертывания программных продуктов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="text-center">
                <div className="inline-flex p-4 bg-purple-500/20 rounded-full mb-4">
                  <Icon name="Rocket" className="text-purple-400" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">35+</h3>
                <p className="text-slate-400">Развернутых проектов</p>
              </div>
            </Card>
            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="text-center">
                <div className="inline-flex p-4 bg-pink-500/20 rounded-full mb-4">
                  <Icon name="Users" className="text-pink-400" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-slate-400">Uptime систем</p>
              </div>
            </Card>
            <Card className="p-8 bg-slate-800/50 border-purple-500/30 backdrop-blur hover:border-purple-500/60 transition-all">
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-500/20 rounded-full mb-4">
                  <Icon name="Star" className="text-blue-400" size={32} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                <p className="text-slate-400">Техническая поддержка</p>
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
                      <h3 className="text-2xl font-bold text-white">Инженер по развертыванию и сопровождению</h3>
                      <p className="text-purple-400">СберТех • Москва</p>
                    </div>
                    <span className="text-slate-500">2022-2024</span>
                  </div>
                  <p className="text-slate-300 mb-4">
                    Настройка и поддержка CI/CD процессов для 12 микросервисов. Автоматизация развертывания 
                    в Kubernetes. Мониторинг и обеспечение отказоустойчивости систем с нагрузкой 50K+ RPS. 
                    Сокращение времени деплоя с 2 часов до 15 минут.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">Kubernetes</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">Docker</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">GitLab CI</Badge>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">Prometheus</Badge>
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
                      <h3 className="text-2xl font-bold text-white">DevOps-инженер</h3>
                      <p className="text-pink-400">Яндекс.Маркет • Москва</p>
                    </div>
                    <span className="text-slate-500">2020-2022</span>
                  </div>
                  <p className="text-slate-300 mb-4">
                    Развертывание и сопровождение инфраструктуры e-commerce проекта. Настройка мониторинга 
                    и алертинга с помощью Prometheus и Grafana. Миграция legacy-приложений в контейнеры. 
                    Автоматизация резервного копирования и восстановления данных.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">Ansible</Badge>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">Terraform</Badge>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">PostgreSQL</Badge>
                    <Badge variant="secondary" className="bg-pink-500/20 text-pink-300">Grafana</Badge>
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
                  <h3 className="text-2xl font-bold text-white mb-2">Развертывание инфраструктуры</h3>
                  <p className="text-slate-400">
                    Настройка CI/CD pipeline, контейнеризация приложений, развертывание в Kubernetes. 
                    Автоматизация процессов с помощью Ansible, Terraform и GitLab CI.
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
                  <h3 className="text-2xl font-bold text-white mb-2">Мониторинг и поддержка</h3>
                  <p className="text-slate-400">
                    Настройка систем мониторинга (Prometheus, Grafana, ELK). Обеспечение высокой 
                    доступности сервисов. Оперативное реагирование на инциденты 24/7.
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
                  <h3 className="text-2xl font-bold text-white mb-2">Оптимизация и масштабирование</h3>
                  <p className="text-slate-400">
                    Настройка автомасштабирования приложений. Оптимизация использования ресурсов. 
                    Миграция монолитов в микросервисную архитектуру.
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
                  <h3 className="text-2xl font-bold text-white mb-2">Консультирование по DevOps</h3>
                  <p className="text-slate-400">
                    Аудит инфраструктуры, выбор инструментов для CI/CD, обучение команд 
                    best practices DevOps, помощь в переходе на контейнеризацию.
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
              <h3 className="text-xl font-bold text-white mb-3">Надежность систем</h3>
              <p className="text-slate-400">
                Гарантирую uptime 99.9%. Настраиваю резервирование и отказоустойчивость. 
                Документирую все процессы и предоставляю техподдержку.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-pink-500/20 rounded-full mb-6">
                <Icon name="Clock" className="text-pink-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Быстрое развертывание</h3>
              <p className="text-slate-400">
                Автоматизирую процессы развертывания. Средний срок настройки 
                CI/CD для проекта - 3-5 дней. 90% релизов без даунтайма.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-500/20 rounded-full mb-6">
                <Icon name="LineChart" className="text-blue-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Экономия ресурсов</h3>
              <p className="text-slate-400">
                Оптимизирую инфраструктуру для снижения затрат. 
                Помогаю сократить расходы на серверы в среднем на 30-40%.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-6">
                <Icon name="Sparkles" className="text-green-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Современный стек</h3>
              <p className="text-slate-400">
                Работаю с актуальными инструментами: Kubernetes, Docker, 
                GitLab CI, Ansible, Terraform, Prometheus, Grafana.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-orange-500/20 rounded-full mb-6">
                <Icon name="Headphones" className="text-orange-400" size={36} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Круглосуточный мониторинг</h3>
              <p className="text-slate-400">
                Настраиваю систему алертов и дежурств. Реагирую на инциденты 
                в течение 15 минут. Предоставляю отчеты о работе систем.
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