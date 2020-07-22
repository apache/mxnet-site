

``mx.symbol.lamb_update_phase2``
================================================================

Description
----------------------

Phase II of lamb update it performs the following operations and updates grad.

Link to paper: https://arxiv.org/pdf/1904.00962.pdf

.. math::

    \begin{gather*}
    if (lower_bound >= 0)
    then
         r1 = max(r1, lower_bound)
    if (upper_bound >= 0)
    then
         r1 = max(r1, upper_bound)

    if (r1 == 0 or r2 == 0)
    then
         lr = lr
    else
         lr = lr * (r1/r2)
    weight = weight - lr * g
    \end{gather*}




Usage
----------

.. code:: r

	mx.symbol.lamb_update_phase2(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``weight``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Weight                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``g``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Output of lamb_update_phase 1                              |
+----------------------------------------+------------------------------------------------------------+
| ``r1``                                 | NDArray-or-Symbol                                          |
|                                        | r1                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``r2``                                 | NDArray-or-Symbol                                          |
|                                        | r2                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``lr``                                 | float, required.                                           |
|                                        |                                                            |
|                                        | Learning rate                                              |
+----------------------------------------+------------------------------------------------------------+
| ``lower.bound``                        | float, optional, default=-1.                               |
|                                        |                                                            |
|                                        | Lower limit of norm of weight. If lower_bound <= 0, Lower  |
|                                        | limit is not                                               |
|                                        | set                                                        |
+----------------------------------------+------------------------------------------------------------+
| ``upper.bound``                        | float, optional, default=-1.                               |
|                                        |                                                            |
|                                        | Upper limit of norm of weight. If upper_bound <= 0, Upper  |
|                                        | limit is not                                               |
|                                        | set                                                        |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/optimizer_op.cc#L992

