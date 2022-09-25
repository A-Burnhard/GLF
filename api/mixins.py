from rest_framework import permissions

from .permissions import IsStaffPermission, IsSuperAdminPermission, IsSuperStaffPermission

#Custom Mixins for permission classes

class IsSuperAdminPermissionMixin():
    permissions_classes = [permissions.IsAdminUser, IsSuperStaffPermission]

class IsSuperStaffPermissionMixin():
    permissions_classes = [IsSuperStaffPermission]

class IsStaffPermissionMixin():
    permissions_classes = [IsStaffPermission]