import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";

const Signin = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!userId || !password) {
      setError("ユーザーIDとパスワードを入力してください。");
      return;
    }
    setError("");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">顧客管理デモアプリ</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <Alert variant="destructive" className="text-sm mb-2 py-2">{error}</Alert>}
          <div className="space-y-4">
            <Input
              placeholder="メールアドレス"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <Input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full" onClick={handleLogin} disabled={userId === '' || password === ''}>
              ログイン
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signin;
