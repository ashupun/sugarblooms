"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = sessionStorage.getItem("isAdminAuthenticated");
    if (!authStatus) {
      window.location.href = "/admin";
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    // Add proper validation and API call here
    if (passwordForm.currentPassword !== "sugarbloomsadmin") {
      setPasswordError("Current password is incorrect");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New passwords do not match");
      return;
    }

    if (passwordForm.newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long");
      return;
    }

    // Success (replace with actual API call in production)
    setPasswordSuccess("Password changed successfully");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setShowChangePassword(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdminAuthenticated");
    window.location.href = "/admin";
  };

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-50"
              >
                Logout
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="text-gray-600 font-medium mb-2">Total Orders</h3>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="text-gray-600 font-medium mb-2">
                  Pending Orders
                </h3>
                <p className="text-2xl font-semibold text-gray-900">0</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="text-gray-600 font-medium mb-2">
                  Today's Revenue
                </h3>
                <p className="text-2xl font-semibold text-gray-900">£0</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button
                onClick={() => setShowChangePassword(!showChangePassword)}
                className="w-full md:w-auto border-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                variant="outline"
              >
                Change Password
              </Button>

              {showChangePassword && (
                <form
                  onSubmit={handlePasswordChange}
                  className="mt-4 bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-100"
                >
                  {passwordError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                      {passwordError}
                    </div>
                  )}
                  {passwordSuccess && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                      {passwordSuccess}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label
                      htmlFor="currentPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Current Password
                    </label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          currentPassword: e.target.value,
                        })
                      }
                      className="border-gray-200 focus:border-pink-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Password
                    </label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          newPassword: e.target.value,
                        })
                      }
                      className="border-gray-200 focus:border-pink-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm New Password
                    </label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwordForm.confirmPassword}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="border-gray-200 focus:border-pink-400"
                      required
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      className="bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full"
                    >
                      Change Password
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setShowChangePassword(false)}
                      variant="outline"
                      className="border-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-full"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
