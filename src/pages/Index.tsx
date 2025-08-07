import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('about');

  const services = [
    {
      title: 'Техническая поддержка',
      description: 'Круглосуточная поддержка ваших IT-систем',
      icon: 'Headphones',
      features: ['24/7 поддержка', 'Удаленное решение', 'Быстрый отклик']
    },
    {
      title: 'Системное администрирование',
      description: 'Настройка и обслуживание серверов и сетей',
      icon: 'Server',
      features: ['Настройка серверов', 'Безопасность сети', 'Мониторинг']
    },
    {
      title: 'Разработка ПО',
      description: 'Создание программных решений под ваши задачи',
      icon: 'Code',
      features: ['Веб-приложения', 'Автоматизация', 'Интеграция API']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-light-gray to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-poppins font-bold text-dark-slate">
              TechFlow
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 ${
                  activeTab === 'about' 
                    ? 'bg-coral text-white shadow-lg' 
                    : 'text-dark-slate hover:text-coral hover:bg-coral/10'
                }`}
              >
                О нас
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 ${
                  activeTab === 'services' 
                    ? 'bg-coral text-white shadow-lg' 
                    : 'text-dark-slate hover:text-coral hover:bg-coral/10'
                }`}
              >
                Услуги
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 ${
                  activeTab === 'contact' 
                    ? 'bg-coral text-white shadow-lg' 
                    : 'text-dark-slate hover:text-coral hover:bg-coral/10'
                }`}
              >
                Как найти
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeTab === 'about' && (
        <section className="py-20 px-6 animate-fade-in">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold text-dark-slate mb-6 leading-tight">
                Ваш надёжный 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-turquoise"> IT-партнёр</span>
              </h1>
              <p className="text-xl font-inter text-muted-foreground mb-8 max-w-2xl mx-auto">
                Мы предоставляем полный спектр IT-услуг для бизнеса любого масштаба. 
                От технической поддержки до разработки сложных программных решений.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-coral hover:bg-coral/90 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setActiveTab('services')}
                >
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  Наши услуги
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white font-poppins font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setActiveTab('contact')}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-coral to-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-dark-slate mb-2">Быстро</h3>
                <p className="text-muted-foreground font-inter">Оперативное решение любых IT-задач</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-turquoise to-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-dark-slate mb-2">Надёжно</h3>
                <p className="text-muted-foreground font-inter">Проверенные технологии и подходы</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-coral to-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-dark-slate mb-2">Профессионально</h3>
                <p className="text-muted-foreground font-inter">Опытная команда экспертов</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeTab === 'services' && (
        <section className="py-20 px-6 animate-fade-in">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-slate mb-6">
                Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-turquoise">услуги</span>
              </h2>
              <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
                Полный спектр IT-услуг для развития вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transform hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-coral to-turquoise rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={service.icon as any} size={40} className="text-white" />
                    </div>
                    <CardTitle className="text-2xl font-poppins font-semibold text-dark-slate">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground font-inter text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Icon name="Check" size={16} className="text-turquoise flex-shrink-0" />
                          <span className="font-inter text-dark-slate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full mt-6 bg-gradient-to-r from-coral to-turquoise hover:from-coral/90 hover:to-turquoise/90 text-white font-poppins font-semibold rounded-xl transition-all duration-300"
                      onClick={() => setActiveTab('contact')}
                    >
                      Заказать услугу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section className="py-20 px-6 animate-fade-in">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-slate mb-6">
                Как нас <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-turquoise">найти</span>
              </h2>
              <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-8 border-0 bg-white/70 backdrop-blur-sm shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-dark-slate mb-2">Адрес</h3>
                      <p className="font-inter text-muted-foreground">
                        г. Москва, ул. Тверская, д. 15<br />
                        БЦ "Технопарк", офис 420
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-dark-slate mb-2">Телефон</h3>
                      <p className="font-inter text-muted-foreground">
                        +7 (495) 123-45-67<br />
                        +7 (800) 555-00-99
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-coral to-turquoise rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-dark-slate mb-2">Email</h3>
                      <p className="font-inter text-muted-foreground">
                        info@techflow.ru<br />
                        support@techflow.ru
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-dark-slate mb-2">Режим работы</h3>
                      <p className="font-inter text-muted-foreground">
                        Пн-Пт: 9:00 - 18:00<br />
                        Техподдержка: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-0 bg-white/70 backdrop-blur-sm shadow-xl">
                <h3 className="text-2xl font-poppins font-semibold text-dark-slate mb-6">Напишите нам</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-inter font-medium text-dark-slate mb-2">
                      Ваше имя
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 font-inter"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-inter font-medium text-dark-slate mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 font-inter"
                      placeholder="Введите ваш email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-inter font-medium text-dark-slate mb-2">
                      Сообщение
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-200 font-inter resize-none"
                      placeholder="Опишите вашу задачу"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-coral to-turquoise hover:from-coral/90 hover:to-turquoise/90 text-white font-poppins font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
                <Badge variant="secondary" className="bg-coral text-white font-poppins">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </Badge>
                <Badge variant="secondary" className="bg-turquoise text-white font-poppins">
                  <Icon name="AtSign" size={16} className="mr-2" />
                  WhatsApp
                </Badge>
                <Badge variant="secondary" className="bg-gradient-to-r from-coral to-turquoise text-white font-poppins">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Viber
                </Badge>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}