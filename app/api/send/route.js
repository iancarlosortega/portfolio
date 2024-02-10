import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const res = await request.text()
  const { name, email, message } = JSON.parse(res)

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['iancarlosortegaleon@gmail.com'],
      subject: 'From your portfolio website',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }

}