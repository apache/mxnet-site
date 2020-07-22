

``mx.nd.Custom``
================================

Description
----------------------

Apply a custom operator implemented in a frontend language (like Python).

Custom operators should override required methods like `forward` and `backward`.
The custom operator must be registered before it can be used.
Please check the tutorial here: https://mxnet.incubator.apache.org/api/faq/new_op



Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol[].                                       |
|                                        |                                                            |
|                                        | Input data for the custom operator.                        |
+----------------------------------------+------------------------------------------------------------+
| ``op.type``                            | string.                                                    |
|                                        |                                                            |
|                                        | Name of the custom operator. This is the name that is      |
|                                        | passed to `mx.operator.register` to register the           |
|                                        | operator.                                                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/custom/custom.cc#L546

