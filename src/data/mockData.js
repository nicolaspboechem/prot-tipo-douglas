export const clients = [
  {
    id: 'franca-shopping',
    name: 'Franca Shopping',
    description: 'Shopping center premium com 180 lojas',
    campaign: 'Natal dos Sonhos',
    roi: 14.2,
    color: 'from-orange-500 to-red-600',
    icon: 'Building2',
  },
  {
    id: 'praca-nova',
    name: 'Praça Nova',
    description: 'Complexo comercial e entretenimento',
    campaign: 'Verão 2026',
    roi: 11.8,
    color: 'from-blue-500 to-cyan-600',
    icon: 'Store',
  },
  {
    id: 'moc-shopping',
    name: 'MOC Shopping',
    description: 'Centro de compras e lazer',
    campaign: 'Brand Awareness',
    roi: 18.5,
    color: 'from-purple-500 to-pink-600',
    icon: 'ShoppingBag',
  },
];

export const quickSuggestions = [
  {
    id: 1,
    text: 'Ideias para Reels de Natal',
    icon: 'Video',
  },
  {
    id: 2,
    text: 'Newsletter Semanal',
    icon: 'Mail',
  },
  {
    id: 3,
    text: 'Legenda para Instagram',
    icon: 'Instagram',
  },
  {
    id: 4,
    text: 'Cronograma de Conteúdo',
    icon: 'Calendar',
  },
];

export const aiResponses = [
  {
    trigger: 'reels',
    response: `Criando esboço... 🎨

**Hook (3s):** Close no rosto da pessoa suando frio, olhando pro relógio. Texto: 'Faltam 2 horas pro Natal...'

**Corpo (15s):** Montagem acelerada correndo pelas lojas do shopping, pegando sacolas, vendedores ajudando, embrulho de presente.

**CTA (2s):** Logo do shopping com texto: 'Vem que ainda dá tempo! Aberto até 22h.'

**Música sugerida:** Trilha natalina remixada com beat agitado
**Hashtags:** #NatalDosSonhos #UltimaHora #Shopping`,
  },
  {
    trigger: 'newsletter',
    response: `📧 Newsletter Semanal - Estrutura

**Assunto:** [Nome do Cliente] | Novidades que você não pode perder esta semana

**Abertura:**
Olá, [Nome]! 👋
Preparamos uma seleção especial para você aproveitar ao máximo sua visita esta semana.

**Bloco 1 - Destaque da Semana:**
🎯 [Promoção/Evento Principal]

**Bloco 2 - Novidades:**
✨ 3 novas lojas inauguradas
🍽️ Novo restaurante na praça de alimentação

**Bloco 3 - Dica da Semana:**
💡 Horário menos movimentado: Terças, 14h-16h

**CTA Final:**
[Botão] Planeje sua visita

**Rodapé:**
Horário de funcionamento | Redes sociais | Localização`,
  },
  {
    trigger: 'legenda',
    response: `✨ Legenda para Instagram

"Aquele momento em que você encontra EXATAMENTE o que procurava... e mais um montinho de coisas que nem sabia que precisava 🛍️💫

É isso que acontece quando você visita a gente: cada corredor é uma nova descoberta, cada loja é uma surpresa.

Vem viver essa experiência!

📍 [Nome do Shopping]
⏰ Seg a Sáb: 10h às 22h | Dom: 12h às 20h

#Shopping #Compras #Descobertas #Moda #Lifestyle"

**Sugestão de visual:** Carrossel com 3-4 fotos: sacolas coloridas, vitrine atrativa, pessoa sorrindo com compras, vista geral do shopping.`,
  },
  {
    trigger: 'cronograma',
    response: `📅 Cronograma de Conteúdo - Semana

**Segunda-feira:**
- 09h: Story - Bom dia + dica da semana
- 17h: Feed - Post motivacional (voltar pra rotina)

**Terça-feira:**
- 10h: Reels - Tour por nova loja
- 19h: Story - Enquete interativa

**Quarta-feira:**
- 09h: Story - Bastidores
- 15h: Feed - Carrossel de ofertas

**Quinta-feira:**
- 11h: Reels - Trend do momento
- 20h: Story - Quiz sobre o shopping

**Sexta-feira:**
- 09h: Story - Contagem regressiva fim de semana
- 18h: Feed - Programação do final de semana

**Sábado:**
- 12h: Story - Cobertura ao vivo
- 19h: Reels - Melhores momentos do dia

**Domingo:**
- 14h: Feed - Recap da semana
- 20h: Story - Prévia da próxima semana

📊 Meta: 14 posts | 28 stories | 3 reels`,
  },
];

export const kpis = [
  {
    id: 'reach',
    label: 'Alcance Total',
    value: '842.3k',
    change: '+14%',
    positive: true,
    icon: 'TrendingUp',
  },
  {
    id: 'conversion',
    label: 'Conversão',
    value: '3.2%',
    change: '-0.4%',
    positive: false,
    icon: 'Target',
  },
  {
    id: 'roi',
    label: 'ROI (YTD)',
    value: '14.2x',
    change: '+124%',
    positive: true,
    icon: 'DollarSign',
  },
];

export const aiInsights = [
  {
    id: 1,
    type: 'warning',
    title: 'Mudança de Horário',
    message: 'Horário nobre mudou: seus seguidores estão 40% mais ativos às 19h.',
    icon: 'Clock',
  },
  {
    id: 2,
    type: 'success',
    title: 'Conteúdo Viral',
    message: 'O Reels "Tour na Praça" alcançou virais locais. Sugiro parte 2.',
    icon: 'TrendingUp',
  },
  {
    id: 3,
    type: 'info',
    title: 'Oportunidade',
    message: 'Stories com enquetes têm 3x mais engajamento. Teste esta semana.',
    icon: 'Lightbulb',
  },
];

export const campaignStats = {
  postsThisMonth: 24,
  postsTarget: 30,
  engagement: '+12%',
};
