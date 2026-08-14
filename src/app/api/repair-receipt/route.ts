import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { model, symptom, phone, request } = await req.json();

    // 입력값 검증
    if (!model || !symptom || !phone) {
      return NextResponse.json(
        { error: "필수 항목이 누락되었습니다." },
        { status: 400 }
      );
    }

    // SMTP 메일 전송 객체 생성
    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 465,
      secure: true,
      auth: {
        user: "mirinae263@naver.com",
        pass: process.env.NAVER_EMAIL_PASSWORD,
      },
    });

    // 이메일 옵션 (from을 이메일 주소만 명시하도록 수정)
    const mailOptions = {
      from: "mirinae263@naver.com", // 👈 이름 수식어를 떼고 이메일 주소만 지정
      to: "mirinae263@naver.com",
      subject: `[신규 수리 접수] ${model} - ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
          <h2 style="color: #0088ff; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-top: 0;">
            📱 새로운 수리 접수증이 도착했습니다
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px; font-weight: bold; width: 120px; background-color: #f8fafc; border-radius: 6px;">핸드폰 기종</td>
              <td style="padding: 10px; color: #1e293b;">${model}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #f8fafc; border-radius: 6px;">고장 증상</td>
              <td style="padding: 10px; color: #1e293b;">${symptom}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #f8fafc; border-radius: 6px;">연락처</td>
              <td style="padding: 10px; color: #0088ff; font-weight: bold;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; background-color: #f8fafc; border-radius: 6px;">기타 요청사항</td>
              <td style="padding: 10px; color: #1e293b; white-space: pre-wrap;">${request || "없음"}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
            본 메일은 수리 접수 페이지에서 자동으로 발송되었습니다.
          </p>
        </div>
      `,
    };

    // 전송 실행 및 결과 로그 찍기
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ 메일 발송 성공 디버깅 정보:", info.messageId, info.response);

    return NextResponse.json({ success: true, message: "메일 발송 완료" });
  } catch (error) {
    console.error("❌ 이메일 발송 오류:", error);
    return NextResponse.json(
      { error: "이메일 전송 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}