"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const PENDING_REFERENCE_KEY = "ontime-pending-deposit-reference";

type VerifyResponse = {
  success?: boolean;
  message?: string;
  data?: {
    reference?: string;
    status?: string;
    amount?: string;
    currency?: string;
    wallet_balance?: string;
  };
};

export default function DepositCallback() {
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState(
    "Checking payment reference..."
  );
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const urlReference =
      params.get("reference") ||
      params.get("paymentReference") ||
      "";

    const savedReference =
      sessionStorage.getItem(PENDING_REFERENCE_KEY) || "";

    const ref = urlReference || savedReference;

    if (!ref) {
      setMessage(
        "No payment reference was supplied. Please sign in and check your wallet activity."
      );
      return;
    }

    setReference(ref);

    sessionStorage.setItem(
      PENDING_REFERENCE_KEY,
      ref
    );

    setMessage(
      "Your payment checkout has returned to ONTIME. Verify your payment below."
    );
  }, []);

  async function verifyPayment() {
    if (!reference || busy) return;

    const token = sessionStorage.getItem(
      "ontime-customer-token"
    );

    if (!token) {
      setError(
        "Please sign in before verifying this payment."
      );
      return;
    }

    setBusy(true);
    setError("");

    try {
      const response = await api<VerifyResponse>(
        "/monnify/deposit/verify",
        {
          method: "POST",
          body: JSON.stringify({
            payment_reference: reference
          })
        },
        token
      );

      const result = response?.data;
      const paymentStatus =
        result?.status?.toLowerCase() || "";

      setStatus(paymentStatus);

      if (
        paymentStatus === "completed" ||
        paymentStatus === "already_processed"
      ) {
        setMessage(
          "Payment confirmed successfully. Your wallet has been credited."
        );

        sessionStorage.removeItem(
          PENDING_REFERENCE_KEY
        );

      } else if (paymentStatus === "pending") {
        setMessage(
          "Payment has not yet been confirmed. Please wait and verify again later."
        );

      } else {
        setMessage(
          response?.message ||
          "Verification completed. Please check your wallet activity."
        );
      }

    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Payment verification failed. Please try again."
      );

    } finally {
      setBusy(false);
    }
  }

  const completed =
    status === "completed" ||
    status === "already_processed";

  return (
    <main className="auth-wrap">
      <aside className="auth-aside">
        <div className="brand" style={{ color: "white" }}>
          <span className="brand-mark">O</span>
          <span>
            ONTIME
            <small>SUBDATA LTD</small>
          </span>
        </div>

        <div>
          <span className="eyebrow">WALLET FUNDING</span>
          <h1>Payment status</h1>
          <p>
            Verify your payment securely through the ONTIME backend
            before relying on your wallet balance.
          </p>
        </div>

        <div>
          © {new Date().getFullYear()} ONTIME SUBDATA LTD
        </div>
      </aside>

      <section className="auth-main">
        <div className="auth-card">
          <div
            className="feature-icon"
            style={{
              width: 58,
              height: 58,
              fontSize: 28
            }}
          >
            {completed ? "✓" : "₦"}
          </div>

          <h2>Checkout return</h2>

          <p className="muted">{message}</p>

          {reference && (
            <div
              className="panel"
              style={{
                marginTop: 20,
                overflowWrap: "anywhere"
              }}
            >
              <div className="stat-label">
                Payment reference
              </div>
              <strong>{reference}</strong>
            </div>
          )}

          {status && (
            <div
              className="panel"
              style={{ marginTop: 15 }}
            >
              <div className="stat-label">
                Verification status
              </div>
              <strong>
                {status.replace("_", " ").toUpperCase()}
              </strong>
            </div>
          )}

          {error && (
            <div
              className="form-error"
              style={{ marginTop: 15 }}
            >
              {error}
            </div>
          )}

          <button
            className="btn"
            disabled={busy || !reference || completed}
            onClick={verifyPayment}
            style={{
              width: "100%",
              marginTop: 20
            }}
          >
            {busy
              ? "Verifying payment..."
              : completed
              ? "Payment confirmed"
              : "Verify payment"}
          </button>

          <a
            className="btn secondary"
            href="/dashboard"
            style={{
              width: "100%",
              marginTop: 10
            }}
          >
            Open customer dashboard
          </a>

          <a
            href="/"
            style={{
              display: "block",
              textAlign: "center",
              fontSize: 13,
              marginTop: 16,
              color: "#737783"
            }}
          >
            Return to home
          </a>
        </div>
      </section>
    </main>
  );
}