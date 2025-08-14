import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark text-foreground overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-dark via-cosmic-purple/30 to-space-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(217,70,239,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 border-b border-border/50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-neon-cyan rounded-lg flex items-center justify-center animate-neon-pulse">
            <Icon name="Bot" size={20} className="text-space-dark" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-magenta-neon bg-clip-text text-transparent">
            DeliveryBot AI
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#main" className="text-foreground/80 hover:text-neon-cyan transition-colors">Главная</a>
          <a href="#tech" className="text-foreground/80 hover:text-neon-cyan transition-colors">Технологии</a>
          <a href="#features" className="text-foreground/80 hover:text-neon-cyan transition-colors">Функции</a>
          <a href="#benefits" className="text-foreground/80 hover:text-neon-cyan transition-colors">Преимущества</a>
          <a href="#demo" className="text-foreground/80 hover:text-neon-cyan transition-colors">Демо</a>
          <a href="#contact" className="text-foreground/80 hover:text-neon-cyan transition-colors">Контакты</a>
        </div>
        <Button className="bg-neon-cyan text-space-dark hover:bg-neon-cyan/90 animate-neon-pulse">
          Заказать демо
        </Button>
      </nav>

      {/* Hero Section */}
      <section id="main" className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-magenta-neon/20 text-magenta-neon border-magenta-neon animate-neon-pulse">
            🚀 Будущее доставки уже здесь
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-electric-blue to-magenta-neon bg-clip-text text-transparent leading-tight">
            Автономный<br />Робот-Доставщик
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Революционная система доставки с искусственным интеллектом и умной навигацией. 
            Быстро, безопасно, эффективно — 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-neon-cyan text-space-dark hover:bg-neon-cyan/90 text-lg px-8 py-4 animate-neon-pulse">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
            <Button size="lg" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 text-lg px-8 py-4">
              <Icon name="Download" size={20} className="mr-2" />
              Техническая документация
            </Button>
          </div>

          {/* Robot Image */}
          <div className="relative">
            <div className="w-96 h-96 mx-auto relative animate-float">
              <img 
                src="/img/e58fcf84-e091-49cb-8609-bc9afc21d149.jpg" 
                alt="Автономный робот-доставщик" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-neon-cyan/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-electric-blue bg-clip-text text-transparent">
            Передовые технологии
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Наш робот использует самые современные разработки в области ИИ и робототехники
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-neon-pulse">
                <Icon name="Brain" size={24} className="text-neon-cyan" />
              </div>
              <CardTitle className="text-neon-cyan">Искусственный интеллект</CardTitle>
              <CardDescription>
                Продвинутые алгоритмы машинного обучения для оптимального планирования маршрутов
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-neon-pulse">
                <Icon name="MapPin" size={24} className="text-electric-blue" />
              </div>
              <CardTitle className="text-electric-blue">Умная навигация</CardTitle>
              <CardDescription>
                Система GPS + LIDAR + компьютерное зрение для точного позиционирования
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-magenta-neon/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-neon-pulse">
                <Icon name="Shield" size={24} className="text-magenta-neon" />
              </div>
              <CardTitle className="text-magenta-neon">Безопасность</CardTitle>
              <CardDescription>
                Многоуровневая система защиты и обнаружения препятствий в реальном времени
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-magenta-neon bg-clip-text text-transparent">
            Функциональные возможности
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комплексное решение для автономной доставки любых грузов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "Clock", title: "24/7 работа", desc: "Круглосуточная доставка без выходных" },
            { icon: "Zap", title: "Быстрая зарядка", desc: "Полная зарядка за 30 минут" },
            { icon: "Package", title: "Грузоподъемность", desc: "До 50 кг полезной нагрузки" },
            { icon: "Smartphone", title: "Мобильное приложение", desc: "Отслеживание в реальном времени" },
            { icon: "Cloud", title: "Облачная аналитика", desc: "Сбор и анализ данных доставки" },
            { icon: "Wifi", title: "5G подключение", desc: "Высокоскоростная связь" },
            { icon: "Battery", title: "Долговечность", desc: "До 12 часов работы на одном заряде" },
            { icon: "Lock", title: "Защищенный груз", desc: "Биометрическая защита отсека" }
          ].map((feature, index) => (
            <Card key={index} className="bg-card/30 border-border/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-magenta-neon/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-neon-pulse">
                  <Icon name={feature.icon as any} size={24} className="text-neon-cyan" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-magenta-neon to-neon-cyan bg-clip-text text-transparent">
            Преимущества для бизнеса
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Революционизируйте свою службу доставки с нашими роботами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-neon-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="TrendingUp" size={16} className="text-neon-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-neon-cyan">Экономия до 70%</h3>
                <p className="text-muted-foreground">Снижение затрат на персонал и топливо</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Target" size={16} className="text-electric-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-electric-blue">99.8% точность</h3>
                <p className="text-muted-foreground">Доставка точно в срок и по адресу</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-magenta-neon/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="Leaf" size={16} className="text-magenta-neon" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-magenta-neon">Экологичность</h3>
                <p className="text-muted-foreground">Нулевые выбросы углекислого газа</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card/20 to-card/5 rounded-2xl p-8 border border-border/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center text-neon-cyan">Статистика эффективности</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Скорость доставки</span>
                  <span className="text-neon-cyan">+150%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-cyan to-electric-blue h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Удовлетворенность клиентов</span>
                  <span className="text-electric-blue">96%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-electric-blue to-magenta-neon h-2 rounded-full w-[96%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span>Снижение затрат</span>
                  <span className="text-magenta-neon">70%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-gradient-to-r from-magenta-neon to-neon-cyan h-2 rounded-full w-[70%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-magenta-neon bg-clip-text text-transparent">
            Попробуйте демо
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Посмотрите как работает наш робот-доставщик в действии
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/30 border-border/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-space-dark to-cosmic-purple/50 h-96 flex items-center justify-center">
                <Button size="lg" className="bg-neon-cyan text-space-dark hover:bg-neon-cyan/90 animate-neon-pulse">
                  <Icon name="Play" size={32} className="mr-2" />
                  Запустить демонстрацию
                </Button>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-magenta-neon/20 text-magenta-neon border-magenta-neon">
                    Интерактивно
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы внедрить автономную доставку? Обсудим ваш проект
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/30 border-border/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Mail" size={24} className="text-neon-cyan" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@deliverybot.ai</p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 border-border/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Phone" size={24} className="text-electric-blue" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 border-border/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-magenta-neon/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="MapPin" size={24} className="text-magenta-neon" />
              </div>
              <h3 className="font-semibold mb-2">Офис</h3>
              <p className="text-muted-foreground">Москва, Сколково</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-neon-cyan to-magenta-neon text-space-dark hover:opacity-90 text-lg px-8 py-4">
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать встречу
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-neon-cyan rounded-lg flex items-center justify-center animate-neon-pulse">
                <Icon name="Bot" size={20} className="text-space-dark" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-magenta-neon bg-clip-text text-transparent">
                DeliveryBot AI
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Будущее доставки начинается сегодня
            </p>
            <div className="flex justify-center space-x-6">
              <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
              <Icon name="Linkedin" size={24} className="text-muted-foreground hover:text-electric-blue cursor-pointer transition-colors" />
              <Icon name="Github" size={24} className="text-muted-foreground hover:text-magenta-neon cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;